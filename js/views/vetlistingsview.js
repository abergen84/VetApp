;
(function(window, undefined) {

    window.app = window.app || {};

    var VetListingsView = Backbone.View.extend({

        tagName: "div",
        className: "vetlistings",
        template: "vetlistings",

        render: function() {
            var self = this;
            $.get("./templates/" + this.template + ".html", function(template) {
                var html = $(template).html();
                self.$el.html(html).show();
            })
            return this;
            //this.el.innerHTML = _.template(this.template, this.model);
        },

        initialize: function() {
            // this.data = _.cloneDeep(this.model);
            this.render();
        },

        events: {
            "click button": "saveToFirebase"
        },

        saveToFirebase: function(e) {
            e.preventDefault();
            this.model.email = this.el.querySelector('input[name="vetemail"]').value;
            app.VetsFirebase.add(this.model);
            location.hash = "#/";
        }

    })

    app.VetListingsView = VetListingsView;

})(window, undefined);
