const createChannel = require("./channel_controller");
const consumer = require('./consumer_controller');
const publish = require('./publisher_controller');

module.exports = { createChannel, consumer, publish };