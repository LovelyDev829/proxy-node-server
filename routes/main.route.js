let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()
// await classSchema.find().populate({ path: 'studies' })
var firstIpAddress = '', count = 0;
router.route('/').post(async (req, res) => {
    if(firstIpAddress === '') firstIpAddress = req?.body?.ipAddress
    else if(firstIpAddress === req?.body?.ipAddress){
        console.log("------------------------------------ " + (count+1) + " client(s)")
        count = 0;
    }
    else count++;
    // console.log((req.header('x-forwarded-for') || req.socket.remoteAddres), "    "+req?.body?.ipAddress)
    console.log(req.header('x-forwarded-for') || req.socket.remoteAddress)
    console.log("IP address : ", req?.body?.ipAddress)
    return res.status(200).json({success : true})
})

module.exports = router
