;(function(window, undefined){

	window.app = window.app || {};

	var VetOptInModel = Backbone.Model.extend({
		// urlRoot: "https://vetapp.firebaseio.com/vets",
		initialize: function(opts){
			this.view = new app.VetView();
		}
	})

	app.VetOptInModel = VetOptInModel;

})(window, undefined)