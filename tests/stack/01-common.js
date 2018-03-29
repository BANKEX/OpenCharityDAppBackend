const assert = require('assert');
const request = require('request');
const fs = require('fs');
const config = require('config');

const ADDRESS = config.get('address');
const mainURL = ADDRESS.external;
console.log(mainURL);
console.log(process.env.NODE_ENV);

describe('--------Common tests-----------', ()=> {
  it('Сервер отвечает на запросы', (done)=> {
    request(mainURL + '/api/testAPI', (err, resp, body) => {
      if (err) return done(err);
      assert.equal(resp.statusCode, 200);
      done();
    });
  });

  it('Корректно отдает testAPI.ejs', (done)=> {
    request(mainURL + '/api/testAPI', (err, resp, body) => {
      if (err) return done(err);
      assert.equal(body.indexOf('oc_client_back') != -1, true);
      done();
    });
  });

  it('HTML Ошибки при запросе /api/hello', (done)=> {
    request(mainURL + '/api/hello', (err, resp, body) => {
      if (err) return done(err);
      assert.equal(body.indexOf('Запрос к API некорректен') != -1, true);
      done();
    });
  });
  
});
