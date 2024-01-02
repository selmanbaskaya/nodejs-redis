const redis = require("redis")
const client = redis.createClient()

client.on("error", err => console.error(err))


// SET FUNCTION
client.set("fname", "Selman", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from set function for fname: ', msg);
})

client.set("lname", "Baskaya", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from set function for lname: ', msg);
})

//GET FUNCTIONS
client.get("fname", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from get function for fname: ', msg);
})

client.get("lname", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from get function for lname: ', msg);
})

// APPEND FUCTION
client.append("fname", "...", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from append function for fname: ', msg);
    client.get("fname", (err, msg) => {
        if (err)
            console.error(err);
        console.log('Message from append function for fname with new result: ', msg);
    })
})

// DEL FUNCTION
client.del("lname", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from del function for lname: ', msg);
})

// EXISTS FUNCTION
client.exists("fname", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from exists function for fname: ', msg);
})

client.exists("lname", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from exists function for lname: ', msg);
})

// SADD FUNCTION
client.sadd("users:19283746", "Selman Baskaya", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from sadd function for user19283746: ', msg);
})

// SINTER FUNCTION
client.sinter("users:19283746", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from sinter function for user19283746: ', msg);
})

// SREM FUNCTION
client.srem("users:19283746", "Selman Baskaya", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from srem function for user19283746: ', msg);
})

// HSET FUNCTION
client.hSet("users:19283746", "name", "Selman", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from hSet function for user19283746: ', msg);
})

// HGET FUNCTION
client.hGetAll("users:19283746", (err, msg) => {
    if (err)
        console.error(err);
    console.log('Message from hGetAll function for user19283746: ', msg);
})
