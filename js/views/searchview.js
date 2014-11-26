;(function(window, undefined){

	window.app = window.app || {};

	var SearchView = Backbone.View.extend({
		tagName: "div",
		className: "searcharea",
		html: "<form><div><input type='text'></div><button>add</button></form>",

		render: function(){
			this.el.innerHTML = this.html
		},

		initialize: function(){
			var self = this;
			self.render();
		}


	})

app.SearchView = SearchView;

})(window, undefined);