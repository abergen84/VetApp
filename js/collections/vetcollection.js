;(function(window, undefined){

	window.app = window.app || {};

	var VetOptInCollection = Backbone.Collection.extend({

		model: app.VetOptInModel,

		createInput: function(){
			var input = {};
            $(':input').each(function() {
                input[this.name] = this.value;
            	})
            console.log(input);
            return input;
		},

		clientid: "JYJ4TFANLM5Y2UOKRV2NJ5DWI4TC5WGLKO5MHXDX2HIDC0IV",

		clientsecret: "DY5UM5HYBDAK0PSTGA1RFZPVUUMMQUXLVMQBZD22TAB5ZEPV",

		url: function(){
			
			var input = this.createInput();

			return [
				"https://api.foursquare.com/v2/venues/search",
            	"?client_id=",
            	this.clientid,
            	"&client_secret=",
	            this.clientsecret,
	            "&v=20130815",
	            "&near=",
	            input.city,
	            ',',
	            "&query=",
	            input.business
			].join('');
		},

		parse: function(data){
			console.log(data);
			return data;
		},

		initialize: function(){
			this.fetch().then(function(error, collection){
		    	console.log(arguments);
	    	})
		}


	})

	app.VetOptInCollection = VetOptInCollection;

})(window, undefined);