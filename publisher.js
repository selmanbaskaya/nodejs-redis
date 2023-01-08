const redis = require("redis")
const client = redis.createClient()

client.on("error", err => console.error(err))


// PUBLISH FUNCTION
client.publish("demo", "hello world!", (err, num) => {
    console.log(`Message was sent to ${num}.`);
})