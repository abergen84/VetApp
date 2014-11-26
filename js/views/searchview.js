;(function(window, undefined){

	window.app = window.app || {};

	var SearchView = Backbone.View.extend({
		tagName: "div",
		className: "searcharea",
		//html: "<form><div><input type='text'></div><button>add</button></form>",
		template: 'search',

		render: function(){
			var self = this;
			$.get("/templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html);
			})
			return this;
			//this.el.innerHTML = this.html
		},

		initialize: function(){
			var self = this;
			self.render();
		}


	})

app.SearchView = SearchView;

})(window, undefined);