// Twilio Credentials
// (replace with yours)
var accountSid = 'ACeffe77421d064f61b409969e4e1a3056';
var authToken = '2b3994aad10cce6efe8e5e79554a58b6';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
	// replace with your numbers
    to: "+14237021345",
    from: "+14237084956",
    body: "I feel an integration party brewing!",
}, function(err, message) {
    console.log(message.sid);
});
