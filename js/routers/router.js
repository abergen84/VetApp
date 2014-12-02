;
(function(window, undefined) {

    window.app = window.app || {};


    var VetAppRouter = Backbone.Router.extend({

        routes: {
            "vetlistings": "page3",
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

        // page3: function() {
        // 	this.hideAll();
        //     this.vetlistingsview.render();
        // },

        initialize: function() {
        	// create app view
        	this.appview = new app.AppView();

        	// create search view
        	this.searchview = new app.SearchView();
            this.appview.$el.append(this.searchview.el);

            // create login view
            this.vetloginview = new app.VetView();
            this.appview.$el.append(this.vetloginview.el);

            //create vet listings view
            // this.vetlistingsview = new app.VetListingsView();
            // this.appview.$el.append(this.vetlistingsview.el);

            this.views = [this.searchview, this.vetloginview];

            Backbone.history.start();

        }


    })

    app.VetAppRouter = VetAppRouter;

})(window, undefined);
