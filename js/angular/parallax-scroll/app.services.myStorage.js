'use strict';

export default angular.module('myApp')
  .factory('myStorage', 
  	['$rootScope', '$log', 
  	($rootScope, $log) => {

	let obj = {
		window: {
			width:  window.innerWidth,
			height: window.innerHeight,
			top:    window.pageYOffset
		}
	};

	window.addEventListener('resize', (event) => {
		obj.window.width  = window.innerWidth;
		obj.window.height = window.innerHeight;
		obj.window.top    = window.pageYOffset;
	});

	return obj;

}]);
