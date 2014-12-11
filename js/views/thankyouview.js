;(function(window, undefined){
	"use strict";

window.app = window.app || {};

var ThankYouView = Backbone.View.extend({
	tagName: "div",
	className: "thankyous",
	template: "<div id='myModal' class='reveal-modal small' data-reveal><p class='thankyou'>Thank you, your appointment request has been sent.</hp> <br> <button id='homepage'>Return to Homepage</button> <a class='close-reveal-modal'>&#215;</a></div>",
	render: function(){
		this.el.innerHTML = this.template;
		// $('#homepage').on('click', this.returnToHomepage);
		// _.template(this.template, this.model);
	},

	unrender: function(){
		var modal = $("#myModal")[0],
			reveal = $(".reveal-modal-bg")[0]
		modal.style.opacity = "0";
		reveal.style.opacity = "0";
		setTimeout(function(){
			$(modal).add(reveal).remove();
		}, 250);
	},

	initialize: function(){
		this.render();
	}
})

app.ThankYouView = ThankYouView;


})(window, undefined);