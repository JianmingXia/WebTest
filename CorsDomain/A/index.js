debugger;
var invocation = new XMLHttpRequest();
var url = 'http://www.b.com/1.png';

function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}

function handler() {
    debugger;
    if (invocation.readyState==4 && invocation.status==200)
    {

    }
}

callOtherDomain();
