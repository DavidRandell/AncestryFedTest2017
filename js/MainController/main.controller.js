angular.module('fedTest')
    .controller('MainController', ['$scope', 'ModalService', function ($scope, ModalService) {

        $scope.showModel = function () {
            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "./js/SubscribeModal/subscribe-modal.html",
                controller: 'SubscribeModalController'
            })
            .then(function (modal) {
                modal.close.then(function (result) {

                });
            })
        }
    }]);