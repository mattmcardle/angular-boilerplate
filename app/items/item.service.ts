module app.item {
	'use strict';

    export class Item {
        id: string;
        name: string;
    }
    
    export class ItemService {
        
        static $inject: Array<string> = ['$http', '$q'];
        
        constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
            
        }
        
        get(itemId: number) {
            var d = this.$q.defer();
            this.$http.get<Array<Customer>>(API.END_POINT + '/items/' + customerId)
                .success(response => d.resolve(response))
                .error(error => d.reject(error));
                
            return d.promise;
        }
       
    }

  angular
    .module('app.item')
    .service('ItemService', ItemService);
    
}