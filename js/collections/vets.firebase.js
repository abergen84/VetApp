;(function(window, undefined) {
    "use strict";

    window.app = window.app || {};

    var VetsFirebase = Backbone.Firebase.Collection.extend({
    	// model: app.VetFirebase,
        url: "https://vetapp.firebaseio.com/vets",
        getFilteredData: function(searchTerm){
        	return this.filter(function(m){

        		var includes = ["email", "name"]
        		var searchSpace = _.map(includes, function(key){
        			return m.get(key);
        		})
        		if(m.get("location").postalCode){
        			searchSpace.push( m.get("location").postalCode );
        		}

        		var existsInSearchSpace = searchSpace.join(" ").search(new RegExp(searchTerm, "ig")) > -1;
				return existsInSearchSpace;
			});
        }
    })

    app.VetsFirebase = new VetsFirebase();

})(window, undefined);
