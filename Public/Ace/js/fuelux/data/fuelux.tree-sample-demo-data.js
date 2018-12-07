var DataSourceTree = function(options) {
	this._data 	= options.data;
	this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
	var self = this;
	var $data = null;

	if(!("name" in options) && !("type" in options)){
		$data = this._data;//the root tree
		callback({ data: $data });
		return;
	}
	else if("type" in options && options.type == "folder") {
		if("additionalParameters" in options && "children" in options.additionalParameters)
			$data = options.additionalParameters.children;
		else $data = {}//no data
	}
	
	if($data != null)//this setTimeout is only for mimicking some random delay
		setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

	//we have used static data here
	//but you can retrieve your data dynamically from a server using ajax call
	//checkout examples/treeview.html and examples/treeview.js for more info
};

var ace_icon = ace.vars['icon'];
//class="'+ace_icon+' fa fa-file-text grey"
//becomes
//class="ace-icon fa fa-file-text grey"
var tree_data_2 = {
	'plan' : {name: '美丽计划', type: 'folder', 'icon-class':'red'}	,
	'life' : {name: '品质生活', type: 'folder', 'icon-class':'orange'}	,
	'health' : {name: '营养健康', type: 'folder', 'icon-class':'blue'}	,
	'business' : {name: '创业学堂', type: 'folder', 'icon-class':'green'}	,
	'pleasure' : {name: '兴趣部落', type: 'folder'}	,
	'ad' : {name: '晒单有礼', type: 'folder'}	,
}
tree_data_2['life']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> 居家日用小知识', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> 红酒基地', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> 优质厨具分享', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> 料理食谱美图', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> 每日早餐', type: 'item'}
	]
}
tree_data_2['health']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> 健康知识', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> 有机食品', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> 膳食补充', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> 养生类', type: 'item'}

	]
}
tree_data_2['plan']['additionalParameters'] = {
    'children' : [
        {name: '<i class="'+ace_icon+' fa fa-film blue"></i> 护肤', type: 'item'},
        {name: '<i class="'+ace_icon+' fa fa-film blue"></i> 美妆', type: 'item'},
        {name: '<i class="'+ace_icon+' fa fa-film blue"></i> 身体护理', type: 'item'}
    ]
}

tree_data_2['business']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-file-text red"></i> 互联网商机及趋势', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> 玩转吉美嘉的技巧', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> <市场的资讯走向></市场的资讯走向>', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text red"></i> 产品知识了解', type: 'item'}
	]
}

tree_data_2['pleasure']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> 插花', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> 家居摆设', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> 烹饪厨房', type: 'item'}
	]
}
tree_data_2['ad']['additionalParameters'] = {
    'children' : [
        {name: '<i class="'+ace_icon+' fa fa-archive brown"></i> 购物心得', type: 'item'},
        {name: '<i class="'+ace_icon+' fa fa-archive brown"></i> 晒单', type: 'item'},
        {name: '<i class="'+ace_icon+' fa fa-archive brown"></i> 心愿单', type: 'item'}
    ]
}
var treeDataSource2 = new DataSourceTree({data: tree_data_2});