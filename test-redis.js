var redis  = require("redis");

var client1 = redis.createClient({
    host: '127.0.0.1',
    port: 7777,
});

var client2 = redis.createClient({
    host: '127.0.0.1',
    port: 7778,
});

client1.set("string key", "string val", redis.print);
client1.hset("hash key 1", "hashtest 1", "some value", redis.print);
client1.hset(["hash key 1", "hashtest 2", "some other value"], redis.print);

client2.hkeys("hash key 1", function (err, replies) {
    if (err) throw err;

    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
});

client1.quit();
client2.quit();
