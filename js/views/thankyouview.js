;(function(window, undefined){

window.app = window.app || {};

var ThankYouView = Backbone.View.extend({
	tagName: "div",
	className: "thankyous",
	template: "<h3 class='thankyou'>Thank you, your appointment request has been sent.</h3> <br> <button>Return to Homepage</button>",


	render: function(){
		this.el.innerHTML = this.template;
		// _.template(this.template, this.model);
	},

	initialize: function(){
		this.render();
	},

	events: {
		"click button": "returnToHomepage"
	},

	returnToHomepage: function(){
		location.hash = "#/"
	}

})

app.ThankYouView = ThankYouView;


})(window, undefined);