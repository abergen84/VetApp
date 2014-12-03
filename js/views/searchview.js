;(function(window, undefined){

	window.app = window.app || {};

	var SearchView = Backbone.View.extend({
		tagName: "div",
		className: "searcharea",
		template: 'search',

		initialize: function(){
			this.listenTo(app.VetsFirebase, "add", this.appendItemToList)
		},

		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html).show();
			})
			return this;
		},

		appendItemToList: function(model, collection, extraData){
			this.$el.append("<li>"+model.get('name')+"</li>"+"<button>schedule</button>")
		},

		events: {
			"click button": "schedulePopup"
		},

		schedulePopup: function(event){
			var self = this;
			event.preventDefault();
			var subview = new app.VetScheduleView();
			self.$el.append(subview.el);
		}
	})

app.SearchView = SearchView;

})(window, undefined);