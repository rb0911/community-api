import User from './test'

// add
const user = {
    name: 'robin',
    age: '30',
    email: '529177108@qq.com'
}

const run = async () => {
    const data = new User(user)
    const result = await data.save()
    console.log(result)
}
// run()
//search
const findMethods = async () => {
    const result = await User.find()
    console.log('----------find-----------')
    console.log(result)
}
// findMethods()

//modify
const updateMethods = async () => {
    const result = await User.updateOne({name:'robin'}, {
        email: '529177110@qq.com'
    })
    console.log('----------modify-----------')
    console.log(result)
}
// updateMethods()
//delete

const deleteMethods = async () => {
    const result = await User.deleteOne({name:'robin'}, {
        email: '529177108@qq.com'
    })
    console.log('----------delete-----------')
    console.log(result)
}
deleteMethods()