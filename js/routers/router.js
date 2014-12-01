;(function(window, undefined){

	window.app = window.app || {};


var VetAppRouter = Backbone.Router.extend({
	
	routes: {
		"*default": "page1",
		"#vetlogin": "page2"
	},

	page1: function(){
		this.searchview = new app.SearchView();
		this.appview.$el.append( this.searchview.el );
		this.searchview.render();
	},

	page2: function(){
		this.vetloginview = new app.VetView();
		this.appview.$el.append( this.vetloginview.el );
		this.vetloginview.render();
	},

	initialize: function(){

	this.appview = new app.AppView(); 
	

	Backbone.history.start();
	
	}


})

app.VetAppRouter = VetAppRouter;

})(window, undefined); 