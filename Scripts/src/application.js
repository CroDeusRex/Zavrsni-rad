var warehouseModule = angular.module('WarehouseModule', ['ngRoute']);

warehouseModule.config(['$httpProvider', function($httpProvider) {
     //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
 }]);

warehouseModule.config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'HtmlTemplates/homepage.html'
    })
    .when('/warehouse/', {
        controller: 'warehouseListController',
        templateUrl: 'HtmlTemplates/warehouseList.html'
    })
    .when('/warehouse/:id/item',{
        controller: 'warehouseEntryEditController',
        templateUrl: 'HtmlTemplates/warehouseEdit.html'
    })
        
        
        /*
    .when('/addNote', {
        controller : 'noteAddNewController',
        templateUrl : 'HtmlTemplates/noteAddnew.html'
    })
    .when('/addCommet/:id', {
        controller : 'noteAddCommentController'
    })
    .when('/editNote/:id', {
        controller: 'noteEditController',
        templateUrl: 'HtmlTemplates/noteEdit.html'
    });
}).
directive('newComment', function ()
{
    return {
        restrict: 'AE',
        templateUrl : 'HtmlTemplates/newComment.html'
    }
}*/});