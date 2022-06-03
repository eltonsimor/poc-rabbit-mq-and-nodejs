const createChannel = require("./channel_controller");

async function consumer() {
    try {

        let channel = await createChannel();

        let queueActual = await channel.assertQueue('learning.code.queue', { durable: true });

        channel.consume(queueActual.queue, (msg) => {
            console.log(`Mensagem Recebida: ${msg.content.toString()}`);
        }, { noAck: true });

    } catch(err) {
        console.error(err);
    }
}

module.exports = consumer;