;(function(window, undefined){

	window.app = window.app || {};


var VetAppRouter = Backbone.Router.extend({

initialize: function(){
	
	this.appview = new app.AppView(); 

	Backbone.history.start();
}


})

app.VetAppRouter = VetAppRouter;

})(window, undefined); 