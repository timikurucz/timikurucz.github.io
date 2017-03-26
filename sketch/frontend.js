'use strict';

var funcsForRequires = (function (){

  // function getLat() {
  //   xhrRequests.createRequest('GET', '/datavalues?names=values/gpsPosition/lat', {}, domOperations.createLat);
  // }
  //
  // function getLong() {
  //   xhrRequests.createRequest('GET', '/datavalues?names=values/gpsPosition/lon', {}, domOperations.createLong);
  // }

  function getAll() {
    xhrRequests.createRequest('GET', '/datavalues?names=values/gpsPosition/lat,values/gpsPosition/lon', {}, domOperations.createMap);
  }


// https://us.data.bodytrace.com/1/device/013777002267415/datavalues?names=values/gpsPosition/lat,values/gpsPosition/lon
  return {
    getAll:getAll,
    // getLat:getLat,
    // getLong:getLong

  }
})();
