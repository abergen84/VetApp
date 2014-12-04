;(function(window, undefined){

window.app = window.app || {};

var Email = Backbone.Collection.extend({

    url: function(){
        return [
            "https://mandrillapp.com/api/1.0/messages/send.json/"
            ];
    },

    sendTheMail: function() {
        
        
        var params = {
        
        "key": "s_ZnjJymZMP4SMnOvwAFzQ",
        "message": {
            "from_email":"bergen@gmail.com",
            "to":[{"email":"bergen@gmail.com"}],
            "subject": "Sending a text email from the Mandrill API",
            "html": "<h2>You have a new appointment request!</h2> *|NAME|*<br> *|NUMBER|* <br> *|DATE|*",
            "track_opens": true,
            "track_clicks": true,
            "merge_vars": [
                {
                    "rcpt": "bergen@gmail.com",
                    "vars": [
                        {
                            "name": "NAME",
                            "content": "Customer name"
                        },
                        {
                            "name": "NUMBER",
                            "content": "Number"
                        },
                        {
                            "name": "DATE",
                            "content": "Date"
                        }
                    ]
                }
            ]
        }
    };


        $.ajax({
        type: "POST",
        url: this.url,
        data: this.params
        });
    }

});

app.Email = Email;

})(window, undefined);