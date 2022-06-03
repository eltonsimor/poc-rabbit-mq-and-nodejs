const express = require('express');
const app = express();
const actuator = require('express-actuator');
const connectors = require("./src/connectors");
const { createChannel, consumer, publish } = require("./src/controllers");
const bodyParser = require('body-parser');

app.use(actuator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/learning-code', (req, res) => {
    publish(req.body)
    res.sendStatus(201);
});

connectors.then(async ([amqp]) => {
    await createChannel(amqp);
    consumer();

    app.listen(3000, () => {
        console.log("Learning-Code Server esta On Air!")
    });
});
