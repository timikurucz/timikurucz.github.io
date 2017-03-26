'use strict';

var domOperations = (function(){

    function createMap(input) {
      console.log(input);
      var lista = Object.keys(input);
      var lastNum = lista[0];
      var lon = (input[lastNum].values.gpsPosition.lon)/10000000;
      var lati = (input[lastNum].values.gpsPosition.lat)/10000000;
      console.log('lon: ' + lon);
      console.log('lati: ' + lati);
      var uluru = {lat: lati, lng: lon};
      // debugger;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  // function createLat(input) {
  //   console.log(input);
  //   console.log(Object.keys(input));
  //   var lista = Object.keys(input);
  //   console.log('utolso: ' + lista[0]);
  //   var lastNum = lista[0];
  //   console.log(input[lastNum].values.gpsPosition.lat);
  //    console.log(input[1490377242618].values.gpsPosition.lat);
  //   lat = input[lastNum].values.gpsPosition.lat;
  // }
  //
  // function createLong(input) {
  //   console.log('LONG:')
  //   console.log(input);
  //   var lista = Object.keys(input);
  //   console.log('utolso: ' + lista[0]);
  //   var lastNum = lista[0];
  //   console.log('lastNum: ' + lastNum);
  //   console.log(input[lastNum].values.gpsPosition.lon);
  //   console.log(input[1490377242618].values.gpsPosition.lon);
  //   lon = input[lastNum].values.gpsPosition.lon;
  // }

  // function initMaps() {
  //   var uluru = {lat: -25.363, lng: 131.044};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }

  return {
    createMap:createMap,
    // createLat:createLat,
    // createLong:createLong,
    // initMaps:initMaps
  };
})();
