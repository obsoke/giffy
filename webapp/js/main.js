'use strict';

var giffy = angular.module('giffy', ['ngRoute']);

giffy.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/gifs', {
                templateUrl: 'views/gif_list.html',
                controller: 'GifListCtrl'
            })
            .when('/gifs/:id', {
                templateUrl: 'views/gif_detail.html',
                controller: 'GifDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

// TODO: move to own file
giffy.factory('S3Service', function($http) {
    function getListOfGifs (){
        return $http({method: 'GET', url: 'http://localhost:8080/'});
    }

    function getGif(gifId) {
        return $http({method: 'GET', url: 'http://localhost:8080/gifs/' + gifId});
    }

    function getLatestGifs (){
        //TODO: implement on server
        return $http({method: 'GET', url: 'http://localhost:8080/latest'});
    }

    function registerGifWithAPI () {
        // TODO: make api call to register db entry for img
    }

    return {
        getListOfGifs: getListOfGifs,
        getGif: getGif
    };
});
