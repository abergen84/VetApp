;(function(window, undefined){

	window.app = window.app || {};

	app.SearchItemView = Backbone.View.extend({
		tagName: "div",
		className: "searchitem",
		template: 'searchitem',

		initialize: function(){
			this.scheduleView = new app.VetScheduleView({ model: this.model });
			this.render();
		},

		render: function(){
			var self = this;
			return $.get("./templates/" + this.template + ".html", function(templateString){
				self.el.innerHTML =	_.template(templateString, self.model.attributes);
				self.$el.append(self.scheduleView.el);
				self.scheduleView.el.style.display = 'none';
			})
		},

		events: {
			"click button": "togglePopup"
		},

		togglePopup: function(event){
			event.preventDefault();
			var d = this.scheduleView.el.style.display;
			if(d === 'none'){
				this.scheduleView.el.style.display = 'block';
			} else {
				this.scheduleView.el.style.display = 'none';
			}

			// var subview = new app.VetScheduleView();
			// $(subview.el).insertAfter(event.target); // -> take the new view, adds it after the event.target (thing you clicked on)
			//$(event.target).append(subview.el);  // -> makes the button big with the el
		}
	})

})(window, undefined);