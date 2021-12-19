import redis, {createClient} from 'redis'
import { promisifyAll } from 'bluebird'
import config from './index'

const options = {
    host: config.REDIS.host,
    port: config.REDIS.port,
    password: config.REDIS.password,
    detect_buffers: config.REDIS.detect_buffers,
}

const client = promisifyAll(createClient(options))
const {promisify} = require('util')
const getAsync = promisify(client.get).bind(client)

client.on('error', err => {
    console.log('Redis client Error:' + err)
})

const setValue = (key, value) => {
    if (typeof value === 'undefined' || value == null || value === '') {
        return
    }
    if (typeof value === 'string') {
        client.set(key, value)
    } else if (typeof value === 'object') {
        Object.keys(value).forEach(item => {
            client.hset(key, item, value[item], redis.print)
        })
    }
    // return client.set(key, value)
}

const getValue = (key) => {
    // return getAsync(key)

    //bluebird
    return client.getAsync(key)
}

const getHValue = (key) => {
    // return promisify(client.hgetall).bind(client)(key)

    //bluebird
    return client.hgetAllAsync(key)
}

const delValue = (key) => {
    client.del(key, (err, res) => {
        if (res === 1) {
            console.log('delete successfully')
        } else {
            console.log('err message ' + err)
        }
    })
}

export {
    client,
    getValue,
    getHValue,
    setValue,
    delValue
}