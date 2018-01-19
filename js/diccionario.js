


var misDatos = angular.module('frasesApp', []);
 
misDatos.controller('controladorDatos',function($scope,$http){
 
		$scope.importar = function(){
 
			$http.get('baseDatos/diccionario.json').success(function(datos){
 
				$scope.bloque = datos;
             $scope.limit= 5;
            
 
			});
		}
 
		$scope.importar();
 
});
 
