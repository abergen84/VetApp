;(function(window, undefined){

	window.app = window.app || {};


var VetAppRouter = Backbone.Router.extend({
	
	routes: {
		"*default": "page1",
		"vets": "page2"
	},

	page1: function(){
		this.searchview.render();
	},

	initialize: function(){

	this.appview = new app.AppView(); 
	this.searchview = new app.SearchView();
	this.appview.$el.append( this.searchview.el );

	Backbone.history.start();
	
	}


})

app.VetAppRouter = VetAppRouter;

})(window, undefined); 