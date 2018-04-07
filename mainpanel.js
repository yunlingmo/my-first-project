
var checkAction=function(){
	var condition_arr=[]
	if ($('input[name="idle"]').prop("checked")){
		condition_arr.push("idle")
	}
	if ($('input[name="in_use"]').prop("checked")){
		condition_arr.push("in_use")
	}
	if ($('input[name="Faulty"]').prop("checked")){
		condition_arr.push("Faulty")
	}
}
var aa=function(state){
	var utilizeStatePanel = Ext.create("Ext.panel.Panel" , {
		id:state+'PanelId',
		html:'<div class="boxDivId"><input type="checkbox" class="fieldId" id="'+state+'fieldId" value=""/> <div class="image" id='+state+'imageId"> </div><div class="idle" id='+state+'nameId">'+state+'</div><div class="number" id='+state+'CountId">66</div></div>'

	});
	return utilizeStatePanel	
}

var focusAction=function(a,b){
	var current_value = $('#textfieldId').val()
	if (current_value=="搜索测试床"){
		$('#textfieldId').css("color","#000"),
		$('#textfieldId').attr("value","")
	}
};
var blurAction=function(){
	var current_value = $('#textfieldId').val()
	if (current_value==""){
		$('#textfieldId').css("color","#C3C3C3"),
		$('#textfieldId').attr("value","搜索测试床")
	}
};
var formPanel = Ext.create("Ext.panel.Panel" , {
	id:'searchPanelId',
	html:'<div class="searchDivId"><input type="textfield" id="textfieldId" value="搜索测试床" style="color:#C3C3C3;" onfocus="focusAction()" onblur="blurAction()" /> <input type="button" value="" id="searchButtonId"></div>'
});

var tbar=[
	{xtype:"button" , text: "测试床一键式检查"},
	{xtype:"button" , text: "测试床一键式检查"},
	{xtype:"button" ,text: "测试床一键式检查"},
	{xtype:"button" ,text: "测试床一键式检查"},formPanel,aa("idle"),aa("in_use"),aa("Faulty")
]

var topPanel = Ext.create('Ext.panel.Panel',{
	id:'topPanelId',
	width:'90%',
	height:'50%',
	region:'north',
	border:true,
	html:'<div class="testbedContain" id="testbedContainId"><div id="tb1"></div><div id="tb2"></div><div id="tb3"></div><div id="tb4"></div><div id="tb5"></div><div id="tb6"></div><div id="tb7"></div></div>'
})
var centerPanel = Ext.create('Ext.panel.Panel',{
	id:'centerPanelId',
	width:'90%',
	height:'48%',
	region:'center',
	border:true,
})
Ext.onReady(function() {
	Ext.create('Ext.Panel', {
		id : 'mainPanelId',
		layout:'border',
		renderTo: 'helloWorldPanel',
		height: window.innerHeight-40,
		width: window.innerWidth-40,
		items:[topPanel,centerPanel],
		tbar:tbar,
	});
});
window.onload=function(){ 
  window.onresize = function(){
	Ext.getCmp('mainPanelId').setWidth(window.innerWidth-40);
	Ext.getCmp('mainPanelId').setHeight(window.innerHeight-40);
	console.log(Ext.getCmp('testbedContainId'))
  }
} 