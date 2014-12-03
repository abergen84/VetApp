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
			console.log(event);
			console.log(this)
			event.preventDefault();
			var subview = new app.VetScheduleView();
			$(subview.el).insertAfter(event.target); // -> take the new view, adds it after the event.target (thing you clicked on)
			//$(event.target).append(subview.el);  // -> makes the button big with the el
			console.log(this.el);
		}
	})

app.SearchView = SearchView;

})(window, undefined);