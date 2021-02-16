var myApp = angular.module("myApp", []);

myApp.controller("HelloWorldCtrl", function ($scope){
    $scope.person = {
        name : "Tushar Gohil",
        age : "XX",
        mobile : "85475995858",
        emails : [
            {discription:'official',email:'tushar.gohil@scet.ac.in'},
            {discription:'personal1',email:'gohil******@yahoo.com'},
            {discription:'personal2',email:'gohil******@gmail.com'}
        ]
    };
});