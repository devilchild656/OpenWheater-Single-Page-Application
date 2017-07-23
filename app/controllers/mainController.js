var classApp= angular.module('weatherApp', []);

classApp.controller('weatherCtrl', function($scope, $http) {
    var vm = $scope;
// url for Weather  API Daily
    var urlOpenWheaterDaily = "http://openweathermap.org/data/2.5/weather?id=";
    var apidId = "&appid=b1b15e88fa797225412429c1c50c122a1";
// url for Weather  API 5 Days
    var urlOpenWheaterForeCast = "http://openweathermap.org/data/2.5/forecast?id=";

    // City Id's
    var london = "2643743";
    var sofia = "727011";
    var paris = "3488716";
    var rome = "4306693";
    var barcelona = "1726701";


    vm.channelInfo = {
        heading: "Open Weather API",
        cityheading: "Choose city",
        london: "London",
        sofia: "Sofia",
        paris: "Paris",
        rome: "Rome",
        barcelona: "Barcelona",
        copyright: "Miroslav Chalov"
    };
    vm.infoCity = {
        city: "City",
        wind: "Wind strength",
        temp: "Temp",
        weather: "Weather"


    };

    //London Request
    vm.LondonCall = function callLondon(){
        $http({
            method: 'GET',
            url: urlOpenWheaterDaily+london+apidId})
            .then(function successCallback(response) {
                vm.city = response.data.name;
                vm.wind = response.data.wind.speed;
                vm.weather = response.data.weather[0].main;
                vm.clouds = response.data.clouds.all;
                vm.icon = response.data.weather[0].icon;
                vm.temp = response.data.main.temp;
            }, function errorCallback(response) {

            });
        $('#imageCity').css("background",'url(../images/london.jpg');
        $('#imageCity').css("background-size",'cover');

        $http({
            method: 'GET',
            url: urlOpenWheaterForeCast+london+apidId})
            .then(function successCallback(response) {
                var listLength = response.data.list.length;
                var listData = {};
                for (var i = 0; i < listLength; i++)
                {
                    listData[i] = {};
                    listData[i].temp =  response.data.list[i].main.temp;
                    listData[i].desc = response.data.list[i].weather[0].description;
                    listData[i].date = response.data.list[i].dt_txt;

                }
                vm.listData = listData;

            }, function errorCallback(response) {
            });
    }

    //Sofia Request
    vm.SofiaCall = function SofiaCall(){
        $http({
            method: 'GET',
            url: urlOpenWheaterDaily+sofia+apidId})
            .then(function successCallback(response) {
                vm.city = response.data.name;
                vm.wind = response.data.wind.speed;
                vm.weather = response.data.weather[0].main;
                vm.clouds = response.data.clouds.all;
                vm.icon = response.data.weather[0].icon;
                vm.temp = response.data.main.temp;
            }, function errorCallback(response) {

            });
        $('#imageCity').css("background",'url(../images/sofia.jpg');
        $('#imageCity').css("background-size",'cover');

        $http({
            method: 'GET',
            url: urlOpenWheaterForeCast+sofia+apidId})
            .then(function successCallback(response) {
                var listLength = response.data.list.length;
                var listData = {};
                for (var i = 0; i < listLength; i++)
                {
                    listData[i] = {};
                    listData[i].temp =  response.data.list[i].main.temp;
                    listData[i].desc = response.data.list[i].weather[0].description;
                    listData[i].date = response.data.list[i].dt_txt;
                }
                vm.listData = listData;

            }, function errorCallback(response) {
            });

    };
    //Paris Request
    vm.ParisCall = function ParisCall(){
        $http({
            method: 'GET',
            url: urlOpenWheaterDaily+paris+apidId})
            .then(function successCallback(response) {
                vm.city = response.data.name;
                vm.wind = response.data.wind.speed;
                vm.weather = response.data.weather[0].main;
                vm.clouds = response.data.clouds.all;
                vm.icon = response.data.weather[0].icon;
                vm.temp = response.data.main.temp;
            }, function errorCallback(response) {

            });
        $('#imageCity').css("background",'url(../images/paris.jpg');
        $('#imageCity').css("background-size",'cover');

        $http({
            method: 'GET',
            url: urlOpenWheaterForeCast+paris+apidId})
            .then(function successCallback(response) {
                var listLength = response.data.list.length;
                var listData = {};
                for (var i = 0; i < listLength; i++)
                {
                    listData[i] = {};
                    listData[i].temp =  response.data.list[i].main.temp;
                    listData[i].desc = response.data.list[i].weather[0].description;
                    listData[i].date = response.data.list[i].dt_txt;
                }
                vm.listData = listData;

            }, function errorCallback(response) {
            });

    };
    //Barcelona Request
    vm.BarcelonaCall = function BarcelonaCall(){
        $http({
            method: 'GET',
            url: urlOpenWheaterDaily+barcelona+apidId})
            .then(function successCallback(response) {
                vm.city = response.data.name;
                vm.wind = response.data.wind.speed;
                vm.weather = response.data.weather[0].main;
                vm.clouds = response.data.clouds.all;
                vm.icon = response.data.weather[0].icon;
                vm.temp = response.data.main.temp;
            }, function errorCallback(response) {

            });
        $('#imageCity').css("background",'url(../images/barcelona.jpg');
        $('#imageCity').css("background-size",'cover');
        $http({
            method: 'GET',
            url: urlOpenWheaterForeCast+barcelona+apidId})
            .then(function successCallback(response) {
                var listLength = response.data.list.length;
                var listData = {};
                for (var i = 0; i < listLength; i++)
                {
                    listData[i] = {};
                    listData[i].temp =  response.data.list[i].main.temp;
                    listData[i].desc = response.data.list[i].weather[0].description;
                    listData[i].date = response.data.list[i].dt_txt;
                }
                vm.listData = listData;

            }, function errorCallback(response) {
            });

    }
    //Rome  Request
    vm.RomeCall = function RomeCall(){
        $http({
            method: 'GET',
            url: urlOpenWheaterDaily+rome+apidId})
            .then(function successCallback(response) {
                vm.city = response.data.name;
                vm.wind = response.data.wind.speed;
                vm.weather = response.data.weather[0].main;
                vm.clouds = response.data.clouds.all;
                vm.icon = response.data.weather[0].icon;
                vm.temp = response.data.main.temp;
            }, function errorCallback(response) {

            });
        $('#imageCity').css("background",'url(../images/Rome.jpg');
        $('#imageCity').css("background-size",'cover');
        $http({
            method: 'GET',
            url: urlOpenWheaterForeCast+rome+apidId})
            .then(function successCallback(response) {
                var listLength = response.data.list.length;
                var listData = {};
                for (var i = 0; i < listLength; i++)
                {
                    listData[i] = {};
                    listData[i].temp =  response.data.list[i].main.temp;
                    listData[i].desc = response.data.list[i].weather[0].description;
                    listData[i].date = response.data.list[i].dt_txt;
                }
                vm.listData = listData;

            }, function errorCallback(response) {
            });

    }

});
