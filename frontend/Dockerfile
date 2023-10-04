# Nodejs Base image
FROM node
WORKDIR /frontend
# install and app dependencies
COPY . .
RUN npm install
RUN npm install -g @angular/cli
# start app
CMD ng serve --host 0.0.0.0
EXPOSE 4200
