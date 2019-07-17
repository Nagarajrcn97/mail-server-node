// const functions = require('firebase-functions');

const express = require('express')

const app = express()
const bodyParser = require('body-parser')

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });
app.post('/email', async (req, res) => {
    const msg = {
        to: 'hello@yopmail.com',
        from: 'hello1@yopmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>${req.body}</strong>`,
      };
    var response = await sgMail.send(msg);
    res.send(response)
})

app.listen(4000, function () {
    console.log('Server listening on port 4000');
});

// exports.app = functions.https.onRequest(app);
