![logo](https://opencharity.staging.bankex.team/api/logo.png)
# OpenCharityDApp back

Backend API for OpenCharityDApp.

# Getting Started

## Require
* NodeJS version >= 8.9

## Install
1. `git clone` this repo
2. `cd oc_client_back`
3. `npm install`
4. configure yamls in `config` dir. There is `development.yaml.example` for edit.

## Run
Environments run:
* development: `npm run development`
* staging:
    - make dir build
    - `npm run build`
    - `npm run staging`
* production:
    - make dir build
    - `npm run build`
    - `npm run production`

## Usage
Development. Server running on 127.0.0.1:8082. Test page - /api/testapi

## Tests
1. Install mocha globally: `npm i mocha -g`
2. Run server on your environment
3. Environments:
    * development: `npm run testDev`
    * staging: `npm run testStage`
    * production: `npm run testProd`

## Demo
https://opencharity.staging.bankex.team/api/testapi


# API description
## Tag & Source
Source API equivalent Tag API, but /api/source/... and all fields have source instead tag.

- [GET /api/tag/all/:include](documentation/endpoints/tag&source/GET_tag_all.md)
- [POST /api/tag/find](documentation/endpoints/tag&source/POST_tag_find.md)
- [POST /api/tag/add](documentation/endpoints/tag&source/POST_tag_add.md)
- [POST /api/tag/edit](documentation/endpoints/tag&source/POST_tag_edit.md)
- [POST /api/tag/del](documentation/endpoints/tag&source/POST_tag_del.md)

## Settings
Settings for DAPP: actual organizations addresses and smart-contracts abi.

- [GET /api/settings/getOrganizationList/:type](documentation/endpoints/settings/GET_settings_getorg.md)
- [POST /api/settings/setOrganizationList](documentation/endpoints/settings/POST_settings_setorg.md)
