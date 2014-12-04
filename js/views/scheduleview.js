;(function(window, undefined){

	window.app = window.app || {};

	var VetScheduleView = Backbone.View.extend({
		tagName: "div",
		className: "schedulearea",
		template: "scheduleview",

		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html", function(template){
				var html = $(template).html();
				self.$el.html(html).show();
			})
			return this;
		},

		initialize: function(){
			this.render();
		},

		events: {
			"submit form": "mandrillEmail"
		},

		mandrillEmail: function(e){
			e.preventDefault();
			var send = new app.Email().sendTheMail();
		}

	})

	app.VetScheduleView = VetScheduleView;

})(window, undefined);