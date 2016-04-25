module app {
  'use strict';

  angular.module('app', ['ngMaterial', 'md.data.table', 'ngMdIcons', 'ngAnimate', 'app.item'])
   .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue-grey');
    }).run(['$rootScope', '$state', function($rootScope:any, $state:any) {
    
    $rootScope.title = 'My App';
    }]);
}