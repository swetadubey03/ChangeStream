const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    orderName:{
        type:String,
        required:true
    },
    personName:{
        type:String,
        required:true,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }

})

module.exports = mongoose.model("Orders", orderSchema)