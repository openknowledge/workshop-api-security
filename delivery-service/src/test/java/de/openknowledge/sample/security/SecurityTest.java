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
package de.openknowledge.sample.security;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;

import org.apache.deltaspike.security.api.authorization.SecurityBindingType;
import org.junit.jupiter.api.Test;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.lang.ArchRule;
import com.tngtech.archunit.lang.syntax.ArchRuleDefinition;

public class SecurityTest {

    @Test
    void everyRestResourceIsSecured() {
        JavaClasses importedClasses = new ClassFileImporter().importPackages("de.openknowledge");

        ArchRule rule = ArchRuleDefinition.methods().that()
            .areAnnotatedWith(GET.class)
            .or().areAnnotatedWith(POST.class)
            .or().areAnnotatedWith(PUT.class)
            .or().areAnnotatedWith(DELETE.class)
            .should()
            .beMetaAnnotatedWith(SecurityBindingType.class);

        rule.check(importedClasses);
    }
}
