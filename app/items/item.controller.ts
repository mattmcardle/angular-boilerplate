module app {
	'use strict';

	export class ItemCtrl {
		public static $inject = [
			'$scope',
			'$rootScope'
		];

		constructor(private $scope: any, private $rootScope: any) {
			console.log( 'This is in the constructor of the item controller');
			this.setTitle();
		}
		
		setTitle() {
			// set view specific page title here
			this.$rootScope.$title = "Items";
		}
	}
}