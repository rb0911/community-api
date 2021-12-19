import mongoose from 'mongoose'
import config from './index'

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// connect success
mongoose.connection.on('connected', () => {
    console.log('mongoose connection open to' + config.DB_URL)
})

//Abnormal connecttion
mongoose.connection.on('error', (err) => {
    console.log('mongoose connection error' + err)
})

//disconnected
mongoose.connection.on('disconnected', () => {
    console.log('mongoose connection disconnected')
})

export default mongoose