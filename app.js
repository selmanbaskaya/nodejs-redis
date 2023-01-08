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
