const redis = require("redis")
const client = redis.createClient()

client.on("error", err => console.error(err))

client.on("message", (channel, msg) => {
    console.log(`Message ${channel} channel is getting: ${msg}`);
})

// SUBSCRIBE FUNCTION
client.subscribe('demo')
