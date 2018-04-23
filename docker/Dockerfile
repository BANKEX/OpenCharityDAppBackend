FROM node:alpine
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

RUN sed -i "s@testpass@$MONGODB_STAGE_PASS@" /oc_client_back/config/staging.yaml
RUN sed -i "s@testpass@$MONGODB_PROD_PASS@" /oc_client_back/config/production.yaml
RUN sed -i "s@TOKENSTAGE@$TOKENSTAGE@" /oc_client_back/config/staging.yaml
RUN sed -i "s@TOKENPROD@$TOKENPROD@" /oc_client_back/config/staging.yaml

EXPOSE 80
