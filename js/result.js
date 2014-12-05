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
		var json = data.result_page;

		var Page = {
			run: function(){
				var me = Page;

				me._init();
			},
			_init: function(){
				var me = Page;

				me._initTemplate();
			},
			_initTemplate: function(){
				var me = Page,
					results = json.results,
					jQresult = $('.result'),
					jQgift = $('.gift'),
					score = +sessionStorage.getItem('score'),
					temp;

				jQgift.html(_.template($('#tpl-gift').html())(json));
				for(var i = 0, len = results.length; i < len; i++){
					temp = results[i];
					if(+(temp.min) <= score && +(temp.max) >= score){
						jQresult.html(_.template($('#tpl-result').html())(temp));
						break;
					}
				}
			}
		};

		Page.run();
	});
});