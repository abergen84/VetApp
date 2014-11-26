;(function(window, undefined){

	window.app = window.app || {};

	var VetView = Backbone.View.extend({

		tagName: "div",
		className: "vetsearcharea",
		template: "vetsearchview",

		initialize: function(){
			this.render();
		},


	})


app.VetView = VetView;

})(window, undefined);