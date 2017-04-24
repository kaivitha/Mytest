/// <reference path="angular.min.js" />

var app = angular.module("Myapp", ["ngRoute","My.Controllers"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        template: "<h1>Home Page</h1><p>Click on the links to change this content</p>"
    })
    .when("/about", {
        template: "<h1>About Us</h1><p>About us page content</p>"
    })
    .when("/blog", {
        template: "<h1>blog Page</h1><p>Blog content</p>"
    })
    .when("/contact", {
        template: "<h1>Contact Us</h1><p>Contact Us Page Content</p>"
    });
});