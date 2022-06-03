const amqp = require("amqplib");

async function setupConnection() {
    try {
        console.log("RabbitMQ Connecting...");
        let connection = await amqp.connect("amqp://root:root@localhost");
        console.log("RabbitMQ Connected!");
        return connection;
    } catch (err) {
        console.error(err);
    }
}

module.exports = setupConnection();