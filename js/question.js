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
		var json = data.questions;

		var Page = {
			run: function(){
				var me = Page;

				me._init();
			},
			_init: function(){
				var me = Page;
				me.score = 0;
				me.index = 0;   //题目编号
				me.count = json.length;
				me.jQanswers = $('.answers');
				me.jQquestion = $('.question');

				me._initStorage();
				me._initEvent();
				me._renderTemplate(0);
			},
			_initEvent: function(){
				var me = Page;

				me.jQanswers.on('click', '.answer-item', function(){
					me._selectAnwser($(this));
				});
			},
			_initStorage: function(){
				var me = Page;
				sessionStorage.setItem("score", 0);   //清除分数
			},
			_renderTemplate: function(index){
				var me = Page,
					pageJson,
					answersTemplate,
					tempdata;

				if(index == me.count) {  //如果找到
					window.location.href = 'share.html';
				}else{
					answersTemplate = _.template($('#tpl-answer').html());
					tempdata = json[index]['answers'];

					me.jQquestion.html(_.template($('#tpl-question').html())(json[index]));
					me.jQanswers.html("")

					for(var i = 0, len = tempdata.length; i < len; i++){
						me.jQanswers.append(answersTemplate(tempdata[i]));
					}
				}
			},
			_selectAnwser: function(tar){
				var me = Page,
					score = +tar.data('score'),
					oldScore = +sessionStorage.getItem("score");

				oldScore += score;
				sessionStorage.setItem("score", oldScore);
				me._renderTemplate(++me.index);
			}
		};

		Page.run();
	});
});