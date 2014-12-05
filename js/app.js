
window.onload = start;

// runs when the DOM is loaded
function start(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/firebase/firebase.js"},
        {url: "./bower_components/backfire/dist/backbonefire.js"},
        {url: "./bower_components/mandrill-api/mandrill.min.js"},
        {url: "./bower_components/foundation/js/foundation.js"},
       

        // CSS
        {url: "./dist/style.css"},
        {url: "./bower_components/normalize.css/normalize.css"},
        {url: "./bower_components/typeplate-starter-kit/css/typeplate.css"},
        //{url: "./bower_components/foundation/css/foundation.css"},

        //vet rollup
        {url: "./js/models/vetmodel.js"},
        {url: "./js/collections/vetcollection.js"},
        {url: "./js/collections/vets.firebase.js"},

        //views
        
        {url: "./js/views/appview.js"},
        {url: "./js/views/searchview.js"},
        {url: "./js/views/scheduleview.js"},
        {url: "./js/views/vetloginview.js"},
        {url: "./js/views/vetlistingsview.js"},
        {url: "./js/views/searchitem.js"},

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
    
