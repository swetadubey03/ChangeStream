const express= require("express")
const router = express.Router()
const {createOrders}= require("../controller/orderController")

router.route('/').post(createOrders)


module.exports = router