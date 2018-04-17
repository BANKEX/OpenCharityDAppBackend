
const allTS = () => {
  respAllTS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/'+ts.choice.value+'/all/'+allRequestTS.value);
  xhr.send();
  xhr.onload = (event) => {
    respAllTS.innerHTML = event.target.responseText;
  };
};

const findTS = () => {
  respFindTS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/'+ts.choice.value+'/find');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify({[ts.choice.value]: JSON.parse(findPropTS.value)}));
  xhr.onload = (event) => {
    respFindTS.innerHTML = event.target.responseText;
  };
};

const addTS = () => {
  respAddTS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/'+ts.choice.value+'/add');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify({[ts.choice.value]: JSON.parse(addPropTS.value)}));
  xhr.onload = (event) => {
    respAddTS.innerHTML = event.target.responseText;
  };
};

const editTS = () => {
  respEditTS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/'+ts.choice.value+'/edit');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify({[ts.choice.value]: JSON.parse(editPropTS.value)}));
  xhr.onload = (event) => {
    respEditTS.innerHTML = event.target.responseText;
  };
};

const delTS = () => {
  respDelTS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/'+ts.choice.value+'/del');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify({[ts.choice.value]: JSON.parse(delPropTS.value)}));
  xhr.onload = (event) => {
    respDelTS.innerHTML = event.target.responseText;
  };
};

const getList = () => {
  listOrg.value = '';
  abiOrg.value = '';
  abiCE.value = '';
  abiID.value = '';
  abiToken.value = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/settings/getOrganizationList/'+settings.choice.value);
  xhr.send();
  xhr.onload = (event) => {
    const response = JSON.parse(event.target.responseText);
    listOrg.value = JSON.stringify(response.list);
    abiOrg.value = JSON.stringify(response.abis.Organization);
    abiCE.value = JSON.stringify(response.abis.CharityEvent);
    abiID.value = JSON.stringify(response.abis.IncomingDonation);
    abiToken.value = JSON.stringify(response.abis.OpenCharityToken);
  };
};

const setList = () => {
  respSet.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/settings/setOrganizationList');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = {
    type: Number(settings.choice.value),
    list: JSON.parse(listOrg.value),
    abis: {
      Organization: JSON.parse(abiOrg.value),
      CharityEvent: JSON.parse(abiCE.value),
      IncomingDonation: JSON.parse(abiID.value),
      OpenCharityToken: JSON.parse(abiToken.value)
    },
    token: tokenInput.value
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    respSet.innerHTML = event.target.responseText;
  };
};

getList();