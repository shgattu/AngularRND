'use strict';
var app =angular.module('twitterAngularAppApp');

app.controller("IndexCtrl",["$scope","$location",function($scope,$location){
    $scope.isActive = function (viewLocation) {
        console.log($location.path());
        return viewLocation === $location.path();
    };
}])
app.factory('feedService', function($http,$q,$timeout) {

    return{
        feed: function(){
      //  var dfd = $q.defer();

          return  $http.get('/AngularRND/rest/twitter/feed').success(function(data){
              return data;
          });
    }
    }
});
app.factory('search', function($http,$q,$timeout) {

    return{
        search: function(){
            //  var dfd = $q.defer();

            return  $http.get('/AngularRND/rest/twitter/search');
        }
    }
});
app.controller('SearchCtrl',["$scope","$http",function ($scope,$http) {

    $scope.displayText = "This is sample text on index page.";
    $scope.CallSearch = function(data) {
        $http.post('/AngularRND/rest/twitter/twitterSearch',data).then(function(feeds){
            $scope.feedModelData = feeds["data"];
        })
    }

}]);

app.controller('FeedCtrl',["$scope","feedService",function ($scope,feedService) {
   $scope.feedModel = new Object();
    $scope.displayText = "This is sample text on index page.";

      feedService.feed().then(function(feeds){
          //  console.log(feeds["data"]);

          $scope.feedModel = feeds["data"];
         });



}]);
app.controller('MainCtrl',["$scope",function ($scope) {
    //   $scope.feedModel = new Object();
    $scope.displayText = "This is sample text on index page.";




}]);
app.controller('StatusCtrl',["$scope","$http",function ($scope,$http) {

    $scope.showForm=true;
   $scope.callTwitter = function(txtValue){
       var obj = JSON.stringify({
               textValue: "Sometext",
                statusText:txtValue

           });
        $http.post('/AngularRND/rest/twitter/postStatus',obj).then(function(){
            $scope.successForm = true;
            $scope.showForm = false;
        })

    }




}]);

