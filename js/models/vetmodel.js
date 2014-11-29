;(function(window, undefined){

	window.app = window.app || {};

	var VetOptInModel = Backbone.Model.extend({
		initialize: function(opts){
			this.view = new app.SearchView();
		}
	})

	app.VetOptInModel = VetOptInModel;

})(window, undefined)