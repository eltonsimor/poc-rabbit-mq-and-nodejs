const createChannel = require("./channel_controller");

async function publish(message) {
    try {

        let channel = await createChannel();

        channel.publish('learning.code.topic', '', Buffer.from(JSON.stringify(message)), {persistent: true});

    } catch(err) {
        console.error(err);
    }
}

module.exports = publish;