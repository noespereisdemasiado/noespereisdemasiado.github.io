


var misDatos = angular.module('frasesApp', []);
 
misDatos.controller('controladorDatos',function($scope,$http){
 
		$scope.importar = function(){
 
			$http.get('baseDatos/frases.json').success(function(datos){
 
				$scope.bloque = datos;
 
			});
		}
 
		$scope.importar();
 
});
 
