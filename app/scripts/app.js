'use strict';

angular
  .module('twitterAngularAppApp', ['ngRoute']).config(["$routeProvider",function($routeProvider){
        $routeProvider.when('/feed',{
            templateUrl : "views/feed.html",
            controller : "FeedCtrl"
        }).when('/status',{
            templateUrl : "views/status.html",
            controller : "StatusCtrl"
        }).when('/search',{
            templateUrl : "views/search.html",
            controller : "SearchCtrl"
        }).when("/",{
            templateUrl : "views/main.html",
            controller : "MainCtrl"
        })
    }])