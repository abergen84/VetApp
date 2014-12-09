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

		events: {
			"submit form": "render"
			// "change input": "liveFilter"
		},

		render: function(e){
			// debugger;
			e && e.preventDefault && e.preventDefault();
			var self = this;

			$.get("./templates/" + this.template + ".html", function(templateString){
				var input = self.el.querySelector("#search-bar");
				var inputValue = input ? input.value : "";
				self.el.innerHTML = _.template(templateString, { searchTerm: inputValue })
				self.el.style.display = "block";
				var filteredData = app.VetsFirebase.getFilteredData(inputValue);
				// debugger;
				_(filteredData).each(function(model){
					var searchitemview = new app.SearchItemView({ model: model })
					self.$el.append(searchitemview.el)
				})
			})
			return this;
		}
	})

app.SearchView = SearchView;

})(window, undefined);