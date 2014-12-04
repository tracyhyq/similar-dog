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
		            "text": "不是",
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
	    "results": [
		    {
		        "left": 0,
		        "right": 100,
		        "title": "刘德华",
		        "content": "你家狗狗像刘德华"
		    }, 
		    {
		        "left": 101,
		        "right": 200,
		        "title": "刘德华2",
		        "content": "你家狗狗像刘德华2"
		    }, 
		    {
		        "left": 201,
		        "right": 300,
		        "title": "刘德华3",
		        "content": "你家狗狗像刘德华3"
		    }, 
		    {
		        "left": 301,
		        "right": 400,
		        "title": "刘德华4",
		        "content": "你家狗狗像刘德华4"
		    }, 
		    {
		        "left": 401,
		        "right": 500,
		        "title": "刘德华5",
		        "content": "你家狗狗像刘德华5"
		    }
	    ]
	};
});