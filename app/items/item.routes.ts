(function() {
  'use strict';

  angular.module('app.item')
  .config(function($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider, $httpProvider:any) {
$stateProvider
    .state('items', {
		url: '/items',
		templateUrl: 'app/items/item.html',
		controller: app.item.ItemCtrl,
		controllerAs: 'vm'
	});
	$urlRouterProvider.otherwise('items');
  });
})();
  