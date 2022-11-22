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
package de.openknowledge.sample.customer.domain;

import static org.apache.commons.lang3.Validate.notBlank;

import javax.json.bind.adapter.JsonbAdapter;
import javax.json.bind.annotation.JsonbTypeAdapter;

import de.openknowledge.sample.customer.domain.UserName.Adapter;

@JsonbTypeAdapter(Adapter.class)
public class UserName {

    private String name;

    protected UserName() {
        // for frameworks
    }

    public UserName(String name) {
        this.name = notBlank(name, "name may not be empty").trim();
    }

    public static UserName valueOf(String value) {
        return new UserName(value);
    }

    @Override
    public String toString() {
        return name;
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) {
            return true;
        }
        if (!(object instanceof UserName)) {
            return false;
        }
        UserName userName = (UserName)object;

        return toString().equals(userName.toString());
    }

    public static class Adapter implements JsonbAdapter<UserName, String> {

        @Override
        public UserName adaptFromJson(String name) throws Exception {
            return new UserName(name);
        }

        @Override
        public String adaptToJson(UserName name) throws Exception {
            return name.toString();
        }
    }
}
