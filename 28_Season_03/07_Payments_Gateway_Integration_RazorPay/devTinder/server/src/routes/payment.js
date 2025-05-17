const express = require("express");
const { userAuth } = require("../middleware/auth");
const paymentRouter = express.Router();
const razorpayInstance = require("../Utils/razorpay");
const Payment = require("../models/payment");
const {membershipAmount} = require("../Utils/constants");
const{validateWebhookSignature} = require('razorpay/dist/utils/razorpat-utils');

paymentRouter.post("/payment/create", userAuth, async (req, res) => {
  try {

    const {firstName, lastName, emailId} = req.user;
    
    const {membershipType} = req.body;

    // Create Razorpay order.
    const order = await razorpayInstance.orders.create({
      amount:membershipAmount[membershipType]*100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        firstName,
        lastName,
        emailId,
        membershipType
      }
    });

    // Save payment info in DB
    const payment = new Payment({
      userID: req.user._id, //This is how we know which user created payment.(authUser)
      orderId: order.id,
      status: order.status,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      notes: order.notes
    });

    const savedPayment = await payment.save();

    // Return to frontend
    res.status(201).json({savedPayment, keyId:process.env.RAZORPAY_KEY_ID});

  } catch (err) {
    console.error("Payment creation failed:", err);
    res.status(500).json({ msg: "Payment creation failed. Try again later." });
  }
});

//This route razorpay will called.
paymentRouter.post("/payment/webhook",async(req,res)=>{
    try{

      const webhookSignature = req.get["x-razorpay-signature"];
      
      const isWebhookValid = validateWebhookSignature(
      JSON.stringify(req.body),
      webhookSignature,
      process.env.RAZORPAY_WEBHOOK_SECRET
      );

      if(!isWebhookValid){
        return res.status(400).json({msg:"Webhook signature is invalid"});
      }

      //update my payment status in DB
      //update the user as premium
      //return success response to razorpay

      if(req.body.event ==="payment.captured"){
        
      }

      if(req.body.event ==="payment.failed"){

      }

      return res.status(200).json({msg:"Webhook received successfully"});

    }catch(err){
        
    }
})


module.exports = paymentRouter;