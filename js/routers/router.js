;
(function(window, undefined) {

    window.app = window.app || {};


    var VetAppRouter = Backbone.Router.extend({

        routes: {
            "vetlogin": "page2",
            "*default": "page1"
        },

        hideAll: function(){
        	this.views.forEach(function(v){ v.$el.hide(); })
        },

        page1: function() {
        	this.hideAll();
            this.searchview.render();
        },

        page2: function() {
        	this.hideAll();
            this.vetloginview.render();
        },

        initialize: function() {
        	// create app view
        	this.appview = new app.AppView();

        	// create search view
        	this.searchview = new app.SearchView();
            this.appview.$el.append(this.searchview.el);

            // create login view
            this.vetloginview = new app.VetView();
            this.appview.$el.append(this.vetloginview.el);

            // store all views in an array
            this.views = [this.searchview, this.vetloginview];

            Backbone.history.start();
        }


    })

    app.VetAppRouter = VetAppRouter;

})(window, undefined);
