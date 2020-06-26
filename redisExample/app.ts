import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";


const redis = await connect({
    hostname: '127.0.0.1',
    port: 6379
});

const hola = await redis.set('ping', 'pong');

const getResponse = await redis.get('ping');

console.log(getResponse);