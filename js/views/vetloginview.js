;(function(window, undefined){

	window.app = window.app || {};

	var VetView = Backbone.View.extend({
		
		tagName: "div",
		className: "#page vetlogin",
		template: "vetsearchview",

		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html).show();
			})
			return this;
		},

		initialize: function(){
			// this.render();
		},

		events: {
			"submit form": "handleSearch"
		},

		handleSearch: function(event){
			event.preventDefault();
			var c = new app.VetOptInCollection();
			var searchTerm = this.el.querySelector('input').value;
			c.getFourSquareLocations(searchTerm).then(function(data){
				console.log(data);
				return data;
			});

			var listing = new app.VetListingView();
		}

	})


app.VetView = VetView;

})(window, undefined);