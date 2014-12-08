;(function(window, undefined) {

    window.app = window.app || {};

    var VetView = Backbone.View.extend({

        tagName: "div",
        id: "page",
        className: "vetlogin",
        template: "vetsearchview",

        render: function() {
            var self = this;
            $.get("./templates/" + this.template + ".html", function(template) {
                var html = $(template).html();
                self.$el.html(html).show();
            })
            return this;
        },

        initialize: function() {
            // this.render();
        },

        events: {
            "submit form": "handleSearch"
        },

        handleSearch: function(event) {
            event.preventDefault();
            
            
            $(".transparent").css({"display":"none"});
            //document.getElementById('transparent').style.display = 'none';
            //this.$el.hide();

            var c = new app.VetOptInCollection(),
                searchTerm = this.el.querySelector('input').value,
                self = this;

            c.getFourSquareLocations(searchTerm).then(function(data) {

                if (!data.response || !data.response.venues) {
                    return;
                }

                var venues = data.response.venues;
                venues.forEach(function(v) {
                    var subview = new app.VetListingsView({
                        model: _.extend({}, v)
                    });
                    self.$el.append(subview.el);
                })

            });


        }

    })


    app.VetView = VetView;

})(window, undefined);
