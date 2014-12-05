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
		var shareData = data.share;
		/***********************************封装微信内置分享*********************************/

		// 开启Api的debug模式
		WeixinApi.enableDebugMode();

		// 所有功能必须包含在 WeixinApi.ready 中进行
		WeixinApi.ready(function(Api){
		    // 微信分享的数据
		    var wxData = {
		        "imgUrl": shareData.url,
		        "link":'http://182.92.231.103/similar-dog',
		        "desc": shareData.content,
		        "title": shareData.content
		    };
		 
		    // 分享的回调
		    var wxCallbacks = {
		        // 分享操作开始之前
		        ready : function() {
		            // 你可以在这里对分享的数据进行重组
		            console.log("准备分享");
		        },
		        // 分享被用户自动取消
		        cancel : function(resp) {
		            // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
		            console.log("分享被取消，msg=" + resp.err_msg);
		        },
		        // 分享失败了
		        fail : function(resp) {
		            // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
		            console.log("分享失败，msg=" + resp.err_msg);
		        },
		        // 分享成功
		        confirm : function(resp) {
		            // 分享成功了，我们是不是可以做一些分享统计呢？
		            console.log("分享成功，msg=" + resp.err_msg);
		            window.location.href = '../pages/result.html';
		        },
		        // 整个分享过程结束
		        all : function(resp,shareTo) {
		            // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
		            console.log("分享" + (shareTo ? "到" + shareTo : "") + "结束，msg=" + resp.err_msg);
		        }
		    };

		    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
		    Api.shareToFriend(wxData, wxCallbacks);

		    // 点击分享到朋友圈，会执行下面这个代码
		    Api.shareToTimeline(wxData, wxCallbacks);

		    // 点击分享到腾讯微博，会执行下面这个代码
		    Api.shareToWeibo(wxData, wxCallbacks);
		});
	});
});