;(function(window, undefined){
	"use strict";

window.app = window.app || {};

var AppView = Backbone.View.extend({

	el: document.body,
	
	events: {
		"click #homepage": "closeThankYou"
	},
	
	closeThankYou: function(){
		if(this.thankyouview){
			this.thankyouview.unrender();
		}
	}
})

app.AppView = AppView;

})(window, undefined);