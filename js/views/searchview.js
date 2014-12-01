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
				self.$el.html(html).show();
			})
			return this;
			//this.el.innerHTML = this.html
		},

		initialize: function(){
			this.views = {
				search: $('.searcharea'),
				vetlogin: $('.vetlogin')
			}
			// var self = this;
			// self.render();
		},

		events: {
			"click .vetlogin a": "handleClick",
		},

		handleClick: function(event){
			var clicked = event.target;
			var show = clicked.getAttribute('show');
			var self = this;
			_.forEach(this.views, function(value, key){
				value.fadeOut();
			})
			this.views[show].fadeIn();
		}


	})

app.SearchView = SearchView;

})(window, undefined);