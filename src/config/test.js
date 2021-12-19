import { getValue, getHValue, setValue, delValue } from "./redisConfig"

// setValue('imooc', 'imooc message from redis client')
setValue('imoocObj', {name: 'imooc', age: 30, email:'imooc@qq.com'})

// getValue('imooc').then(res => {
//     console.log('this is value ' + res)
// })

// getHValue('imoocObj').then(res => {
//     console.log('this is value ' + JSON.stringify(res))
// })

delValue('imooc')