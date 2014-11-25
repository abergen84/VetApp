
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/foundation/js/foundation.js"},
        {url: "./dist/style.css"},

        //vet rollup
        
        {url: "./js/models/vetmodel.js"},
        {url: "./js/collections/vetcollection.js"},

        //views
        
        {url: "./js/views/appview.js"},
        {url: "./js/views/searchview.js"},
        {url: "./js/views/scheduleview.js"},
        {url: "./js/views/vetloginview.js"},

        //router
        
        {url: "./js/routers/router.js"}



    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
    
    var o = $({});
        $.subscribe = function() {
            o.on.apply(o, arguments);
        };
        $.unsubscribe = function() {
            o.off.apply(o, arguments);
        };
        $.publish = function() {
            o.trigger.apply(o, arguments);
        };

        var router = new app.VetAppRouter();


    })

}
    
