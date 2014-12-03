

;
(function(window, undefined) {

    window.app = window.app || {};

    var VetsFirebase = Backbone.Firebase.Collection.extend({
    	// model: app.VetFirebase,
        url: "https://vetapp.firebaseio.com/vets"
    })

    app.VetsFirebase = new VetsFirebase();

})(window, undefined);
