;(function(window, undefined){

	window.app = window.app || {};

	var VetListingsView = Backbone.View.extend({

		tagName: "div",
		//className: "#page vetlogin",
		template: "<h4>{name} <button>select</button></h4>",

		render: function(){
            this.el.innerHTML = _.template(this.template, this.model);
        },

        initialize: function() {
        	this.data = _.cloneDeep(this.model);
        	this.render();
    	},

    	events: {
    		"click button": "saveToFirebase"
    	},

    	saveToFirebase: function(e){
    		e.preventDefault();
    		app.VetsFirebase.add(this.data);
    		location.hash = "#/";
    	}

	})

app.VetListingsView = VetListingsView;

})(window, undefined);