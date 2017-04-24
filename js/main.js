/// <reference path="main.js" />
var app = angular.module('My.Controllers',[]);

app.controller("myController", function ($scope) {
    $scope.data = "my first Dependency controller";
})

app.controller("myCtrl", function ($scope) {
    $scope.message = "welcome to Home Page";
});

app.controller("aboutCtrl", function ($scope) {
    $scope.message = "welcome to About Us";
});

app.controller("blogCtlr", function ($scope) {
    $scope.message = "welcome to Blog";
});

app.controller("contactCtrl", function ($scope) {
    $scope.message = "welcome to Contact Us";
});