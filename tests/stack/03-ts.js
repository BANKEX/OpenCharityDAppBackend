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

let allTag, allTagID;
const testTag = ['hfdfwygwy46rrusuer6efg6gef', '3r7ehhefsf6efgsd6gf6s'];

describe('--------Tags & Source-----------', () => {
  it('GET all Tags', async () => {
    const options = {
      method: 'GET',
      uri: mainURL + '/api/tag/all?limit=10'
    };
    allTag = JSON.parse(await rp(options));
    assert.equal(Array.isArray(allTag), true);
  });

  it('POST find with strings', async () => {
    const options = {
      method: 'POST',
      uri: mainURL + '/api/tag/find',
      body: JSON.stringify({
        tag: allTag
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    };

    allTagID = JSON.parse(await rp.post(options));
    const allNumbers = allTagID.every((el) => (!isNaN(Number(el))));
    assert.equal(Array.isArray(allTagID), true);
    assert.equal(allNumbers, true);
  });

  it('POST find with IDs', async () => {
    const options = {
      method: 'POST',
      uri: mainURL + '/api/tag/find',
      body: JSON.stringify({
        tag: allTagID
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    const response = JSON.parse(await rp.post(options));
    const every = response.every((el) => {
      const ind = allTag.indexOf(el);
      if (ind==-1) return false;
      allTag.splice(ind, 1);
      return true;
    });
    assert.equal(every, true);
  });

  it('POST add tag', async () => {
    const options = {
      method: 'POST',
      uri: mainURL + '/api/tag/add',
      body: JSON.stringify({
        tag: testTag
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    };

    const response = JSON.parse(await rp.post(options));
    assert.equal(Array.isArray(response), true);
    assert.equal(response[0].use, 0);
  });

  it('POST edit tag', async () => {
    const options = {
      method: 'POST',
      uri: mainURL + '/api/tag/edit',
      body: JSON.stringify({
        tag: [testTag[0], testTag[0]+'-edited']
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    };

    const response = JSON.parse(await rp.post(options));
    assert.equal(response.n, 1);
  });

  it('POST del tag', async () => {
    const options = {
      method: 'POST',
      uri: mainURL + '/api/tag/del',
      body: JSON.stringify({
        tag: [testTag[1], testTag[0]+'-edited']
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    };

    const response = JSON.parse(await rp.post(options));
    assert.equal(response.n, 2);
  });

});
