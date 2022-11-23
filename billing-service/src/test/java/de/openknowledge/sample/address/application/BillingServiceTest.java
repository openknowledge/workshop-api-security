/*
 * Copyright 2019 open knowledge GmbH
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
package de.openknowledge.sample.address.application;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.URI;

import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.meecrowave.Meecrowave;
import org.apache.meecrowave.junit5.MeecrowaveConfig;
import org.apache.meecrowave.testing.ConfigurationInject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@MeecrowaveConfig
public class BillingServiceTest {

    @ConfigurationInject
    private Meecrowave.Builder config;

    private URI uri;

    @BeforeEach
    public void setUp() {
        uri = URI.create("http://localhost:" + config.getHttpPort());
    }

    @Test
    public void getAddressIsSecured() {
        Response response = ClientBuilder
            .newClient()
            .target(uri)
            .path("billing-addresses/0815")
            .request(MediaType.APPLICATION_JSON)
            .get();
        assertThat(response.getStatus()).isEqualTo(Response.Status.UNAUTHORIZED.getStatusCode());
    }
}
