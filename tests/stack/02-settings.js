const assert = require('assert');
const request = require('request');
const rp = require('request-promise');
const config = require('config');

const ADDRESS = config.get('address');

rp.defaults({
  simple: false,
  resolveWithFullResponse: true,
  encoding: 'utf-8'
});

const mainURL = ADDRESS.external;

const type = -1;
const list = [
  "0x47f6aa20C90B81b5b1115B989eD853e9EFA8F5B0",
  "0xf51dbaa3264f2dc1a950378416583be7a639ce17",
  "0x184435d6c65fd01f3ef4bb1018dc75503c3f802f"
];
const Organization = require('../jsons/Organization.json').abi;
const CharityEvent = require('../jsons/CharityEvent.json').abi;
const IncomingDonation = require('../jsons/IncomingDonation.json').abi;
const OpenCharityToken = require('../jsons/OpenCharityToken.json').abi;


let saveState;

describe('--------Settings-----------', () => {
  it('GET getOrganizationList for SaveState', async () => {
    const options = {
      method: 'GET',
      uri: mainURL + '/api/settings/getOrganizationList/'+type,
    };
    saveState = JSON.parse(await rp(options));
    assert.equal(saveState.type, type);
    assert.notEqual(saveState.list, undefined);
    assert.notEqual(saveState.abis, undefined);
  });

  it('POST setOrganizationList', async () => {
    const body = {
      type,
      list,
      abis: { Organization, CharityEvent, IncomingDonation, OpenCharityToken }
    };

    const options = {
      method: 'POST',
      uri: mainURL + '/api/settings/setOrganizationList',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    
    const response = await rp.post(options);
    assert.equal(response, 'Ok');
  });

  it('GET getOrganizationList', async () => {
    const options = {
      method: 'GET',
      uri: mainURL + '/api/settings/getOrganizationList/'+type,
    };
    const initData = JSON.parse(await rp(options));
    assert.equal(initData.type, type);
    assert.deepEqual(initData.list, list);
    assert.deepEqual(initData.abis.Organization, Organization);
  });

  it('POST setOrganizationList for Load savedState', async () => {
    const options = {
      method: 'POST',
      uri: mainURL + '/api/settings/setOrganizationList',
      body: JSON.stringify(saveState),
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    const response = await rp.post(options);
    assert.equal(response, 'Ok');
  });
});
