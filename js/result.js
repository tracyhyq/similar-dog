require.config({
	paths: {
		'zepto': 'lib/zepto.min',
		'underscore': 'lib/underscore.1.3.2'
	},
	shim: {
	    zepto: {
	    	exports: '$'
	    },
	    underscore: {
	        exports: '_'
	    }
	}
});

require([
	'zepto'
], function($){
	$(document).ready(function(){
		console.log('result');
	});
});