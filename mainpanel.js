
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
];
var divClickAction=function(event){
	console.log("ddddddddddd")
	console.log(event.srcElement)
	console.log(event.target)
	console.log(event)
	console.log(event.path[0].id)
};
var topPanel = Ext.create('Ext.panel.Panel',{
	id:'topPanelId',
	width:'90%',
	height:'50%',
	region:'north',
	border:true,
	html:'<div class="testbedContain" id="testbedContainId"><div id="tb1" ><input type="checkbox" value="" class="testbedbox" /></div><div id="tb2"><input type="checkbox" value="" class="testbedbox" /></div><div id="tb3"><input type="checkbox" value="" class="testbedbox" /></div><div id="tb4"><input type="checkbox" value="" class="testbedbox" /></div><div id="tb5"><input type="checkbox" value="" class="testbedbox" /></div><div id="tb6"><input type="checkbox" value="" class="testbedbox" /></div><div id="tb7"></div><input type="checkbox" value="" class="testbedbox" /></div>'
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
		listeners:{
		    afterrender:{
		       // element:'dom',
		        fn: function(){
			        console.log("tttttt");
			        listenersEvent()
		    	}
		      
		   }
		}
	});
});

var listenersEvent= function(){
	console.log("ffffffffffff")
	checktestbed={}
	$('.testbedContain').click(function(){
		console.log($(event.srcElement).context.checked)
		console.log($(event.srcElement).parent()[0].id)
		testbedselect=$(event.srcElement).context.checked
		testbedid=$(event.srcElement).parent()[0].id
		checktestbed[testbedid]=testbedselect
		// console.log($('#'+testbedid).css('display'))
		if(testbedselect){
			$('#'+testbedid+' input').css('display','block')	
		}else{
			$('#'+testbedid+' input').css('display','none')
		}
		console.log(checktestbed)
	});

}

window.onload=function(){ 
  window.onresize = function(){
	Ext.getCmp('mainPanelId').setWidth(window.innerWidth-40);
	Ext.getCmp('mainPanelId').setHeight(window.innerHeight-40);
	console.log(Ext.getCmp('testbedContainId'))
  }
} 