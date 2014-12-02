;(function(window, undefined){

	window.app = window.app || {};

	var SearchView = Backbone.View.extend({
		tagName: "div",
		className: "searcharea",
		template: 'search',

		render: function(){
			var self = this;
			$.get("/templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html).show();
			})
			return this;
		}


	})

app.SearchView = SearchView;

})(window, undefined);