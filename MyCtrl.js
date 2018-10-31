var app = angular.module('MyApp', []);
app.controller('MyCtrl', ['$scope',function($scope) {
   $scope.NameList = [];
   
   $scope.Save = function(){
   	$scope.NameList.push({Name : $scope.Name , Family : $scope.Family});
	$scope.Name = "";
	$scope.Family = "";
   }
}]);