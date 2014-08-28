'use strict';

angular.module('giffy')
    .controller('MainCtrl', function($scope, $location, S3Service) {
        $scope.gifList = [];
        $scope.getNumOfGifs = function() {
            //TODO: enable localization
            if($scope.gifList.length === 1) {
                return "There is 1 GIF uploaded.";
            } else {
                return "There are " + $scope.gifList.length + " GIFs uploaded.";
            }
        };

        var gifGetter = S3Service.getListOfGifs();
        gifGetter
            .success(function(data){
                if($scope.errors) { // clear out any previous errors
                    $scpoe.errors = "";
                }
                $scope.gifList = data;
            })
            .error(function(data, status, headers,config) {
                $scope.errors = "ERROR: The API is down! I repeat, the API is down!";
            });

    });