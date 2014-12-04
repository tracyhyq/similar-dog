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
	'zepto',
	'underscore',
	'../data/data'
], function($, _, data){
	$(document).ready(function(){
		var json = typeof data == 'string' ? JSON.parse(data) : data,
			pageJson = json.index_page,
			jQcontainer = $('.container'),
			template = _.template($('#tpl-index').html());
			
		jQcontainer.html(template(pageJson));
	});
});