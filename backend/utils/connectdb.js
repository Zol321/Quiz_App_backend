const mongoose = require('mongoose') 

const connectDatabase = async () => {
    res = await mongoose.connect('mongodb+srv://olonbayarzolboo:BeR9GDncTgqtPCx6@zol.vxipedb.mongodb.net/?retryWrites=true&w=majority')
    if (res) console.log('db connected')
}

module.exports = connectDatabase