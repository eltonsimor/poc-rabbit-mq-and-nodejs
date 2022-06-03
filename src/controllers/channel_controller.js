let channel = null;

async function createChannel(connection) {
    if(!channel){
        channel = await connection.createChannel();
    }

    return channel;
}

module.exports = createChannel;