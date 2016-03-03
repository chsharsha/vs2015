(function () {
    "use strict";
    angular.module("app-trips")
        .controller("tripsController", tripsController);
    function tripsController($http) {
        var vm = this;
        vm.trips = [];
        vm.isBusy = true;
        vm.errorMessage = "";
        //vm.trips = [{
        //    name: 'US Trip',
        //    date:new Date()
        //},
        //{
        //    name: 'Asian Trip',
        //    date: new Date()
        //}];

        $http.get("/api/trips").then(function (response) {

            //success
            angular.copy(response.data, vm.trips);
        }, function (error) {
            vm.errorMessage = "Failed to load data " + error;
        }).finally(function () {
            vm.isBusy = false;
        });
        vm.newTrip = {};
        vm.addTrip = function () {
            vm.isBusy = true;
            $http.post("/api/trips", vm.newTrip)
            .then(function (response) {
                vm.trips.push(response.data);
                vm.newTrip = {};
                
                
            }, function (error) {
                vm.errorMessage = error;
            }
            ).finally(function () {
                vm.isBusy = false;
            });
        };
    }
})();