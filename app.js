var restify = require('restify');
var builder = require('botbuilder');
var credentials = require("./credentials.json");
var request = require("request");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: credentials.microsoftApp.id,
    appPassword: credentials.microsoftApp.password
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    var message = session.message.text;
    var messagebody = { "question": message };

    var options = {
        method: 'POST',
        url: credentials.qna.url,
        headers:
        {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'ocp-apim-subscription-key': credentials.qna.subscriptionKey
        },
        body: JSON.stringify(messagebody)
    };

    request(options, function (error, response, body) {
        if (error) {}//send no reply found
        var object = JSON.parse(body);
        if (object && object.answers && object.answers[0].score >= 50){
          session.send(object.answers[0].answer); //send the message that came from qnamaker, such that it matches more than 50% of the text
        }
        else {
          //send no reply found
        }
    });
});
