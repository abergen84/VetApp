;
(function(window, undefined) {

    window.app = window.app || {};

    var VetScheduleView = Backbone.View.extend({
        tagName: "div",
        className: "schedulearea",
        template: "scheduleview",

        render: function() {
            var self = this;
            $.get("./templates/" + this.template + ".html", function(template) {
                var html = $(template).html();
                self.$el.html(html).show();
            })
            return this;
        },

        initialize: function() {
            this.render();
        },

        createInputForMandrill: function() {
            var input = {};
            this.$el.find(':input').each(function() {
                // debugger;
                input[this.name] = this.value;
            })
            return input;
        },

        events: {
            "submit form": "mandrillEmail"
        },

        mandrillEmail: function(e) {
            e.preventDefault();
            var to_email = this.model.get('email');
            var formData = this.createInputForMandrill();
            // debugger;
            var params = {
                "key": "s_ZnjJymZMP4SMnOvwAFzQ",
                "message": {
                    "from_email": formData.email,
                    "to": [{
                        "email": to_email,
                    }], //need to edit to take in vets email (from form)
                    "subject": "You have a new Appointment Request from: " + formData.name,
                    "html": _.template("<h2>You have a new appointment request!</h2><br> <table border='1'> <tr><td>Client Name</td><td>{name}</td></tr><br> <tr><td>Client Number</td><td>{number}</td></tr> <br> <tr><td>Client E-mail</td><td>{email}</td></tr> <br> <tr><td>Animal Type</td><td>{animal}</td></tr> <br> <tr><td>Reason for Appointment</td><td>{reason}</td></tr> <br> <tr><td>Requested Appointment Date</td><td>{date}</td></tr> <br> <tr><td>Requested Time Slot</td><td>{appt}</td></tr> </table> <br><br> <h2>Please reply directly to this email to setup with the client, or call them at the number provided.</h2>", formData),
                    "track_opens": true,
                    "track_clicks": true,
                    "merge_vars": [{
                        "rcpt": to_email, //need to edit to take in vets email (from form)
                        "vars": [{
                                "name": "NAME",
                                "content": formData.name //edit to include pet owners name from form
                            }, {
                                "name": "NUMBER",
                                "content": formData.number //edit to include pet owners numbers from form
                            }, {
                                "name": "EMAIL",
                                "content": formData.email //edit to include pet owners numbers from form
                            }, {
                                "name": "ANIMAL",
                                "content": formData.animal //edit to include pet owners numbers from form
                            }, {
                                "name": "REASON",
                                "content": formData.reason //edit to include requested date
                            }, {
                                "name": "DATE",
                                "content": formData.date //edit to include requested date
                            }, {
                                "name": "SLOT",
                                "content": formData.appt //edit to include requested date
                            }
                        ]
                    }]
                }
            };
            // debugger;
            location.hash = "#/";
            $('.thankyou').css({"display":"block"});
            
            return $.post("https://mandrillapp.com/api/1.0/messages/send.json/", params);
        }

    })

    app.VetScheduleView = VetScheduleView;

})(window, undefined);
