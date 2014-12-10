;(function(window, undefined){

window.app = window.app || {};

var ThankYouView = Backbone.View.extend({
	tagName: "div",
	className: "thankyous",
	//template: "<h3 class='thankyou'>Thank you, your appointment request has been sent.</h3> <br> <button>Return to Homepage</button>",
	template: "<div id='myModal' class='reveal-modal small' data-reveal><p class='thankyou'>Thank you, your appointment request has been sent.</hp> <br> <button id='homepage'>Return to Homepage</button> <a class='close-reveal-modal'>&#215;</a></div>",

	render: function(){
		this.el.innerHTML = this.template;
		$('#homepage').on('click', this.returnToHomepage);
		// _.template(this.template, this.model);
	},

	initialize: function(){
		this.render();
	},

	// events: {
	// 	"click button": "returnToHomepage"
	// },

	returnToHomepage: function(){
		location.hash = "#/"
	}

})

app.ThankYouView = ThankYouView;


})(window, undefined);