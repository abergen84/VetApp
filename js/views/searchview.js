;(function(window, undefined){

	window.app = window.app || {};

	var SearchView = Backbone.View.extend({
		tagName: "div",
		//id: "page",
		className: "searcharea",
		template: 'search',

		initialize: function(){
			this.listenTo(app.VetsFirebase, "sync", this.render)
			// this.listenTo(app.VetsFirebase, "add", this.render)
		},

		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html).show();
				app.VetsFirebase.each(function(model){
					var searchitemview = new app.SearchItemView({ model: model })
					self.$el.append(searchitemview.el)
				})
			})
			return this;
		}
	})

app.SearchView = SearchView;

})(window, undefined);