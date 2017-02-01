angular.module('fedTest')
.controller('SubscribeModalController', ['$scope','close', function ($scope, close) {

    $scope.closeModal = close;

    $scope.submitForm = function(form){
        if(form.$valid){
            console.log("woot");
            $scope.closeModal();
        }
    }

}]);