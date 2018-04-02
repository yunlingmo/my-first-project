// var panelTop = Ext.Panel
var mMainPanel;
Ext.onReady(function() {
	Ext.create('Ext.Panel', {
		id : 'mainPanelId',
		renderTo: 'helloWorldPanel',
		height: window.innerHeight,
		width: window.innerWidth,
		html: 'First Ext JS Hello World Program',
	});
});
window.onload=function(){ 
  window.onresize = function(){
	Ext.getCmp('mainPanelId').setWidth(window.innerWidth-100);
	Ext.getCmp('mainPanelId').setHeight(window.innerHeight-100)
  }
} 