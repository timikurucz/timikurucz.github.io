'use strict';

var PersonApp = angular.module('PersonApp', ['ui.bootstrap']);

PersonApp.controller('PersonAppController', ['$scope', '$http', '$uibModal','$log', function($scope, $http, $uibModal, $log){
$scope.change="";

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '../views/add.html',
      controller: 'AddPersonController'
    });

  modalInstance.result.then(function (newPerson) {
    console.log(newPerson);
    $scope.persons.push(newPerson);
    $scope.change = JSON.stringify(newPerson);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }

  $scope.deleteOnePerson = function(person){
    var deletedPerson = $scope.persons.indexOf(person);
    $scope.persons.splice(deletedPerson, 1);
    $scope.change = JSON.stringify(person);
  }

  $http.get('./data/persons.json').success(function(data){
    $scope.persons = data;
  });

}]);

PersonApp.controller('AddPersonController', function ($scope, $uibModalInstance) {
  $scope.ok = function() {
     var newPerson = {
       name: $scope.name,
       job: $scope.job,
       age: $scope.age,
       nick: $scope.nickname,
       employee: $scope.employee
     };
     $uibModalInstance.close(newPerson);

   };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
