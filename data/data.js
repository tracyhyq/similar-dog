/**
 * 模拟数据
 * @author tracyqiu
 * @date 2014-12-4
 */

define([], function(){
	return {	
		"index_page": {
			"title": "狗狗像哪个明星？",
			"content": "我家的毛小孩长得像范冰冰~你家的狗狗长得像？",
			"btn_value": "开始测试"
		},
	    "questions": [
		    {
		        "content": "狗狗喜欢咬东西",
		        "answers": [{
		        	"title": "A",
		            "text": "是",
		            "score": 10
		        }, {
		        	"title": "B",
		            "text": "我家的毛小孩长得像范冰冰~你家的狗狗长得像我家的毛小孩长得像范冰冰~你家的狗狗长得像我家的毛小孩长得像范冰冰~你家的狗狗长得像",
		            "score": 100
		        }]
		    }, 
		    {
		        "content": "问题2",
		        "answers": [{
		        	"title": "A",
		            "text": "是",
		            "score": 10
		        }, {
		        	"title": "B",
		            "text": "不是",
		            "score": 100
		        }, {
		        	"title": "C",
		            "text": "不能确定",
		            "score": 150
		        }, {
		        	"title": "D",
		            "text": "不知道",
		            "score": 200
		        }]
		    }, 
		    {
		        "content": "问题3",
		        "answers": [{
		        	"title": "A",
		            "text": "是",
		            "score": 10
		        }, {
		        	"title": "B",
		            "text": "不是",
		            "score": 100
		        }]
		    }, 
		    {
		        "content": "问题4",
		        "answers": [{
		        	"title": "A",
		            "text": "是",
		            "score": 10
		        }, {
		        	"title": "B",
		            "text": "不是",
		            "score": 100
		        }]
		    }, 
		    {
		        "content": "问题5",
		        "answers": [{
		        	"title": "A",
		            "text": "是",
		            "score": 10
		        }, {
		        	"title": "B",
		            "text": "不是",
		            "score": 100
		        }]
		    }
	    ],
	    "share": {
	    	"url": "https://www.google.com.hk/images/srpr/logo11w.png",
	    	"content": "快来看啊，我家的狗狗像吴亚军这个狗贼！！！！！"
	    },
	    "result_page": {
	    	"btn_value": "立即领取",
	    	"tip": "为狗狗<span class=\"change-color\">免费</span>领取一份礼物",
	    	"href": "http://www.baidu.com",
	    	"results": [
			    {
			        "min": 0,
			        "max": 100,
			        "title": "刘德华",
			        "content": "你家狗狗像刘德华"
			    }, 
			    {
			        "min": 101,
			        "max": 200,
			        "title": "刘德华2",
			        "content": "你家狗狗像刘德华2"
			    }, 
			    {
			        "min": 201,
			        "max": 300,
			        "title": "刘德华3",
			        "content": "你家狗狗像刘德华3"
			    }, 
			    {
			        "min": 301,
			        "max": 400,
			        "title": "刘德华4",
			        "content": "你家狗狗像刘德华4"
			    }, 
			    {
			        "min": 401,
			        "max": 550,
			        "title": "刘德华5",
			        "content": "你家狗狗像刘德华5"
			    }
		    ]
	    }
	};
});