;(function(window, undefined){

	window.app = window.app || {};

	var VetView = Backbone.View.extend({

		tagName: "div",
		className: "vetsearcharea",
		template: "vetsearchview",

		render: function(){
			var self = this;
			$.get("/templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html);
			})
			return this;
		},

		initialize: function(){
			this.render();
		},


	})


app.VetView = VetView;

})(window, undefined);