;(function(window, undefined){

window.app = window.app || {};

	var Query = Backbone.Firebase.Collection.extend({
		resource: "vets",
        url: function(){
        	return new Firebase("https://vetapp.firebaseio.com/"+this.resource)
        },
		initialize: function(options){
			this.searchTerm = options ? options.searchTerm : "";
			var self = this;
			this.on("sync", function(collection){
				self.filteredData = collection.filter(function(m){
					return m.get('name') && m.get('name').indexOf(self.searchTerm) > -1;
				});
			})		
		}

	})

	app.Query = new Query();


})(window, undefined);