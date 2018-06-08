FROM node:9-alpine
MAINTAINER Oleg Makarov <om@bankexfoundation.org>

RUN mkdir /oc_client_back

WORKDIR /oc_client_back

ADD /build /oc_client_back/build
ADD /config /oc_client_back/config
ADD /public /oc_client_back/public
ADD /server /oc_client_back/server
ADD /tests /oc_client_back/tests
ADD /package.json /oc_client_back/package.json
ADD /node_modules /oc_client_back/node_modules
RUN mkdir /oc_client_back/settings

ADD entrypoint.sh /oc_client_back/entrypoint.sh
RUN chmod +x /oc_client_back/entrypoint.sh

EXPOSE 80
