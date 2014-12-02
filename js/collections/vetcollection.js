;
(function(window, undefined) {

    window.app = window.app || {};

    var Geolocation = Backbone.Model.extend({

        getGeo: function() {
            var promise = $.Deferred();
            navigator.geolocation.getCurrentPosition(function() {
                var p = arguments[0];
                promise.resolve([p.coords.latitude, p.coords.longitude]);
            });
            return promise;
        }

    });

    var VetOptInCollection = Backbone.Collection.extend({

        model: app.VetOptInModel,

        createInput: function() {
            var input = {};
            $(':input').each(function() {
                input[this.name] = this.value;
            })
            console.log(input);
            return input;
        },

        clientid: "JYJ4TFANLM5Y2UOKRV2NJ5DWI4TC5WGLKO5MHXDX2HIDC0IV",

        clientsecret: "DY5UM5HYBDAK0PSTGA1RFZPVUUMMQUXLVMQBZD22TAB5ZEPV",

        url: function() {

            return [
                "https://api.foursquare.com/v2/venues/search",
                "?client_id=",
                this.clientid,
                "&client_secret=",
                this.clientsecret,
                "&v=20130815",
                "&ll=",
                this.long.toFixed(2),
                ",",
                this.lat.toFixed(2),
                "&query=",
                this.search
            ].join('');
        },

        parse: function(data) {
            console.log(data.response.venues);
            return data.response.venues;
        },

        initialize: function() {
        },

        getFourSquareLocations: function(searchTerm){
        	this.search = searchTerm + "+veterinary";

        	var self = this;
        	var geo = new Geolocation();
            return geo.getGeo().then(function(location) {
                self.long = location[0];
                self.lat = location[1];

                return self.fetch();
            })
        }

    })

    app.VetOptInCollection = VetOptInCollection;

})(window, undefined);
