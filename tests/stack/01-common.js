const assert = require('assert');
const request = require('request');
const fs = require('fs');
const config = require('config');

const ADDRESS = config.get('address');
const mainURL = ADDRESS.external;
console.log(mainURL);
console.log(process.env.NODE_ENV);

describe('--------Common tests-----------', ()=> {
  it('Correct /api/testapi', (done)=> {
    request(mainURL + '/api/testAPI', (err, resp, body) => {
      if (err) return done(err);
      assert.equal(resp.statusCode, 200);
      done();
    });
  });

  it('Correct testAPI.ejs', (done)=> {
    request(mainURL + '/api/testAPI', (err, resp, body) => {
      if (err) return done(err);
      assert.equal(body.indexOf('oc_client_back') != -1, true);
      done();
    });
  });

  it('Incorrect /api/hello', (done)=> {
    request(mainURL + '/api/hello', (err, resp, body) => {
      if (err) return done(err);
      assert.equal(body.indexOf('Wrong API request') != -1, true);
      done();
    });
  });
  
});
