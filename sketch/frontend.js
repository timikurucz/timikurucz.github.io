'use strict';

var funcsForRequires = (function (){

var lat;
var lon;

  function getLat() {
    xhrRequests.createRequest('GET', '/datavalues?names=values/gpsPosition/lat', {}, domOperations.createAllMeals);
  }

  function getLong() {
    xhrRequests.createRequest('GET', '/datavalues?names=values/gpsPosition/lon', {}, domOperations.createLong);
  }

  // function getAllFilteredMeals() {
  //   xhrRequests.createRequest('GET', '/meals?date=' + domOperations.filterInputField.value, {}, domOperations.showFilteredMeals);
  // }
  //
  function getAll() {
    xhrRequests.createRequest('GET', '/datavalues?names=values/gpsPosition/lat,values/gpsPosition/lon', {}, {});
  }


// https://us.data.bodytrace.com/1/device/013777002267415/datavalues?names=values/gpsPosition/lat,values/gpsPosition/lon
  return {
    getAll:getAll,
    getLat:getLat,
    getLong:getLong

  }
})();
