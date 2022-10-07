const asyncHandler = require("express-async-handler")
const Orders  = require('../model/orderSchema')

const createOrders = asyncHandler (async(req,res)=>{
    Orders.watch().on('change', data => console.log(data));
    const {orderName, personName} = req.body
    const newOrders = await Orders.create({
        orderName,
        personName,
        
    })
    if(newOrders){
        res.status(201).json({
           message: "Order has been placed successfully",
           orderName,
           personName,
           
        })
    }else{
        res.status(400)
        throw new Error("Something went wrong")
    }

}
)
module.exports ={createOrders}
