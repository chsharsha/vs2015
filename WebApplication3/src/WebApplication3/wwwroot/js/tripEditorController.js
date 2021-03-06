﻿(function () {
    "use strict";

    angular.module("app-trips")
    .controller("tripEditorController", tripEditorController);

    function tripEditorController($routeParams, $http) {
        var vm = this;
        vm.tripName = $routeParams.tripName;
        vm.stops = [];
        vm.errorMessage = "";
        vm.isBusy = true;
        vm.newStop = {};

        vm.addNewStop = function () {
            $http.post("/api/trips/" + vm.tripName + "/stops", vm.newStop)
            .then(function (response) {
                vm.isBusy = true;
                vm.stops.push(response.data);
                _showMap(vm.stops);
                vm.newStop = {};
            }, function (error) {
                vm.errorMessage = "Failure while posting data";

            }).finally(function () {
                vm.isBusy = false;
            });
        };

        $http.get("/api/trips/" + vm.tripName + "/stops")
        .then(function (response) {
            //Success
            angular.copy(response.data, vm.stops);
            _showMap(vm.stops);
        }, function (error) {
            //Failure
            vm.errorMessage = "Failed to get stops";
        })
        .finally(function () {
            vm.isBusy = false;
        });

    }


    function _showMap(stops) {
        if(stops&&stops.length >0)
        {
            var mapStops = _.map(stops, function (item) {
                return {
                    lat: item.latitude,
                    long: item.longitude,
                    info: item.name
                };
            });


            travelMap.createMap({
                stops: mapStops,
                selector: "#map",
                currentStop: 1,
                initialZoon:3
            });
        }
    }
})();