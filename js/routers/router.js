;
(function(window, undefined) {

    window.app = window.app || {};


    var VetAppRouter = Backbone.Router.extend({

        routes: {
            // "thankyou": "page3",
            "vetlogin": "page2",
            "*default": "page1"
        },

        hideAll: function() {
            this.views.forEach(function(v) {
                v.$el.hide();
            })
        },

        page1: function() {
            this.hideAll();
            this.searchview.render();
        },

        page2: function() {
            this.hideAll();
            this.vetloginview.render();
        },

        // page3: function(){
        //     this.hideAll();
        //     this.thankyouview.render();
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

            //create thank you view
            this.thankyouview = new app.ThankYouView();
            this.appview.$el.append(this.thankyouview.el);
            this.appview.thankyouview = this.thankyouview;

            // store all views in an array
            this.views = [this.searchview, this.vetloginview, this.thankyouview];


            Backbone.history.start();
        }
    })

    app.VetAppRouter = VetAppRouter;

})(window, undefined);
