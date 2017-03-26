'use strict';

var xhrRequests = (function() {
  var host = 'https://us.data.bodytrace.com/1/device/';
  var myimei = '013777002267415';
  var myUser = 'demo@bodytrace.com';
  var myPswd = 'demodemo';

  function createRequest(requestType, endPoint, dataToSend, cb)  {
    var xhr = new XMLHttpRequest();
    xhr.open(requestType, host + myimei + endPoint);
    xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(myUser + ':' + myPswd));
    xhr.onload = function () {
      // console.log(JSON.parse(xhr.response));
      // var response = JSON.parse(xhr.response);

      if (cb !== undefined) {
        var response = JSON.parse(xhr.response);
        cb(response);
      }
    };
    xhr.send();

  //   xhr.onload = function() {
  //   var response = JSON.parse(xhr.response);
  //   createAllTodos(response);
  //   };
  // xhr.send();
  //   // xhr.send(dataToSend);
  }
  return {
    createRequest:createRequest
  };
}());
