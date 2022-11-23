/*
 * Copyright 2022 open knowledge GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package de.openknowledge.sample.address.security;

import java.security.Principal;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.apache.deltaspike.security.api.authorization.Secures;

import de.openknowledge.sample.customer.domain.Customer;
import de.openknowledge.sample.customer.domain.CustomerNumber;
import de.openknowledge.sample.customer.domain.CustomerRepository;

@ApplicationScoped
public class SecurityChecks {

    @Inject
    CustomerRepository customerRepository;

    @Inject
    Principal principal;

    @Secures @Read
    public boolean checkReadAccess(@UserId CustomerNumber number) {
        Optional<Customer> customer = customerRepository.find(number);
        return customer.map(c -> c.getName().toString().equals(principal.getName())).orElse(false);
    }

    @Secures @Update
    public boolean checkUpdateAccess(@UserId CustomerNumber number) {
        Optional<Customer> customer = customerRepository.find(number);
        return customer.map(c -> c.getName().toString().equals(principal.getName())).orElse(false);
    }
}
