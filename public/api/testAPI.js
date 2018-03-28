const socket = io({path: '/api/ws'});
socket.on('connect_error', () => {
  socket.close();
  alert('backend not available');
});

const userSignup = () => {
  respSU.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/user/signup');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = {
    email: emailSU.value,
    firstName: firstNameSU.value,
    lastName: lastNameSU.value,
    password: passwordSU.value
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    respSU.innerHTML = event.target.responseText;
  };
};

const userLogin = () => {
  respLG.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/user/login');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = {
    email: emailLG.value,
    password: passwordLG.value
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    respLG.innerHTML = event.target.responseText;
  };
};

const userLogout = () => {
  respLGT.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/user/logout');
  xhr.send();
  xhr.onload = (event) => {
    respLGT.innerHTML = event.target.responseText;
  };
};

const userGet = () => {
  respGT.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/user');
  xhr.send();
  xhr.onload = (event) => {
    respGT.innerHTML = event.target.responseText;
  };
};

const userChange = () => {
  respCH.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/user/change');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = {
    firstName: (firstNameCH.value) ? firstNameCH.value : undefined,
    lastName: (lastNameCH.value) ? lastNameCH.value : undefined,
    tags: (tagsCH.value) ? tagsCH.value : undefined,
    trans: (transCH.value) ? transCH.value : undefined,
    password: (passwordCH.value) ? passwordCH.value : undefined,
    newpassword: (newpasswordCH.value) ? newpasswordCH.value : undefined
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    respCH.innerHTML = event.target.responseText;
  };
};

const userDelete = () => {
  respDL.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/user/delete');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = {
    password: passwordDL.value
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    respDL.innerHTML = event.target.responseText;
  };
};

const userForgot = () => {
  respFG.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/user/forgot');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = {
    email: emailFG.value
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    // const link = JSON.parse(event.target.responseText).data;
    // respFG.innerHTML = '<a href="'+link+'" target="_blank">'+link+'</a>';
    respFG.innerHTML = event.target.responseText;
  };
};

const addData = (div, data) => {
  const d = document.createElement('div');
  d.style.whiteSpace = 'nowrap';
  d.innerHTML = data;
  div.appendChild(d);
};

const socketResponse = (event, div) => {
  console.log(event.target.responseText);
  const { room, quantity } = JSON.parse(event.target.responseText);
  const dataListener = (data) => {
    if (data!='close') {
      addData(div, data);
    } else {
      socket.removeEventListener(room, dataListener);
      console.log(room + ' - removed');
    }
  };

  socket.on(room, dataListener);
};

const printArray = (text) => {
  const arr = JSON.parse(text);
  let ret='';
  arr.forEach((el) => {
    ret += '<div>'+ JSON.stringify(el) + '</div>';
  });
  return ret;
};

const getOrganizations = () => {
  respORG.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/dapp/getOrganizations');
  xhr.send();
  xhr.onload = (event) => {
    JSON.parse(event.target.responseText).forEach((elem) => {
      addData(respORG, JSON.stringify(elem));
    });
  };
};

const getCharityEvents = () => {
  respCE.innerHTML = '';
  const how = (checkCE.checked) ? '?how=db' : '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/dapp/getCharityEvents/'+orgCE.value+how);
  xhr.send();
  xhr.onload = (event) => {
    if (checkCE.checked) {
      respCE.innerHTML = printArray(event.target.responseText);
    } else {
      socketResponse(event, respCE);
    }
  };
};

const getIncomingDonations = () => {
  respID.innerHTML = '';
  const how = (checkID.checked) ? '?how=db' : '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/dapp/getIncomingDonations/'+orgID.value+how);
  xhr.send();
  xhr.onload = (event) => {
    if (checkID.checked) {
      respID.innerHTML = printArray(event.target.responseText);
    } else {
      socketResponse(event, respID);
    }
  };
};

const getCharityEvent1 = () => {
  respCE1.innerHTML = '';
  const how = (checkCE1.checked) ? '?how=db' : '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/dapp/getCharityEvent/'+hashCE1.value+how);
  xhr.send();
  xhr.onload = (event) => {
    respCE1.innerHTML = event.target.responseText;
  };
};

const getIncomingDonation1 = () => {
  respID1.innerHTML = '';
  const how = (checkID1.checked) ? '?how=db' : '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/dapp/getIncomingDonation/'+hashID1.value+how);
  xhr.send();
  xhr.onload = (event) => {
    respID1.innerHTML = event.target.responseText;
  };
};

const filterCharityEvent = () => {
  respFCE.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/dapp/getCharityEvents');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = JSON.parse(filterCE.value);
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    socketResponse(event, respFCE);
  };
};

const filterIncomingDonation = () => {
  respFID.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/dapp/getIncomingDonations');
  xhr.setRequestHeader('content-type', 'application/json');
  const body = JSON.parse(filterID.value);
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    socketResponse(event, respFID);
  };
};

const search = () => {
  respSI.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/dapp/search');
  xhr.setRequestHeader('content-type', 'application/json');
  body = {
    searchRequest: textSI.value,
    type: selSI.value,
    addition: addSI.value.split(','),
    pageSize: Number(sizeSI.value),
    page: Number(pageSI.value),
    how: (checkSI.checked) ? 'db' : 'bc'
  };
  xhr.send(JSON.stringify(body));
  xhr.onload = (event) => {
    if (checkSI.checked) {
      respSI.innerHTML = printArray(event.target.responseText);
    } else {
      socketResponse(event, respSI);
    }
  };
};

const getUsers = () => {
  respUS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/db/users');
  xhr.send();
  xhr.onload = (event) => {
    respUS.innerHTML = event.target.responseText;
  };
};

const dropUS = () => {
  respDropUS.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/db/dropUsers');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify({password: passDropUS.value}));
  xhr.onload = (event) => {
    respDropUS.innerHTML = event.target.responseText;
  };
};

const getOrgs = () => {
  respORGs.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('get', '/api/db/orgs');
  xhr.send();
  xhr.onload = (event) => {
    respORGs.innerHTML = event.target.responseText;
  };
};

const dropOrg = () => {
  respDropOrg.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/db/dropOrgs');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify({password: passDropOrg.value}));
  xhr.onload = (event) => {
    respDropOrg.innerHTML = event.target.responseText;
  };
};

socket.on('newCharityEvent', (data) => {
  console.log(data);
  newEventCE.style.display = 'block';
  newEventCE.innerHTML = Number(newEventCE.innerHTML)+1;
});

socket.on('newIncomingDonation', (data) => {
  console.log(data);
  newEventID.style.display = 'block';
  newEventID.innerHTML = Number(newEventID.innerHTML)+1;
});