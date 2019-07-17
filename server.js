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
        html: `<strong>${req.body.params.html.username}</strong>`,
      };
    var response = await sgMail.send(msg);
    res.send(response)
})

 // Initialize the app.
 var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
