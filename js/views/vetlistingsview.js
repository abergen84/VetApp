;(function(window, undefined) {
    "use strict";

    window.app = window.app || {};

    var VetListingsView = Backbone.View.extend({

        tagName: "div",
        className: "vetlistings",
        template: "vetlistings",

        render: function() {
            var self = this;
            $.get("./templates/" + this.template + ".html").then(function(template) {
                self.el.innerHTML = _.template(template, self.model);
            })
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

            //$("#vetlink").css({"display":"none"});
        }

    })

    app.VetListingsView = VetListingsView;

})(window, undefined);
