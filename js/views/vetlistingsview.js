;(function(window, undefined){

	window.app = window.app || {};

	var VetListingsView = Backbone.View.extend({

		tagName: "div",
		className: "vetlistings",
		template: "<h4>{name}</h4>",

		// render: function(){
		// 	var self = this;
		// 	$.get("/templates/" + this.template + ".html", function(template){
		// 		var html = $(template).html();
		// 		self.$el.html(html).show();
		// 	})
		// 	return this;
		// },
		render: function(){
            this.el.innerHTML = _.template(this.template, this.model.attributes);
        },

        initialize: function(opts) {
        // this.options = _.extend({}, {
        //         $container: $('body')
        //     },
        //     opts
        // );

        // this.options.$container.append(this.el);

        this.render();
    	
    	}





	})

app.VetListingsView = VetListingsView;

})(window, undefined);