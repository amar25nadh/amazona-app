import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';
import Razorpay from 'razorpay'
const orderRouter = express.Router();
import { paymentConfig } from '../config/PaymentKeys.js'
import request from 'request'

const instance = new Razorpay({
  key_id: paymentConfig.key_id,
  key_secret: paymentConfig.key_secret,

})
//  ------     ---//

orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.post("/order",

  (req, res) => {
    try {
      const options = {
        
        amount: parseInt(req.body.amount) * 100, // amount == Rs 10
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 0,
        // 1 for automatic capture // 0 for manual capture
        

      };
      console.log(`=========`);
      console.log(req.body);
      console.log(req.body.orderObj)
      console.log(`==========`);
      instance.orders.create(options, async function (err, order) {

        if (err) {
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }
        // console.log(`test`)
        return res.status(200).json(order);
      });
    } catch (err) {
      return res.status(500).json({
        message: "Something Went Wrong",
      })
    }

  }
);

orderRouter.post("/capture/:paymentId", (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${paymentConfig.key_id}:${paymentConfig.key_secret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: parseInt(req.body.amount) * 100, // amount == Rs 10 // Same As Order amount
          currency: "INR",
        },
      },
      async function (err, response, body) {
        if (err) {
          console.log(`------1`)
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }
        console.log(`------2`)
        const orderDetails = JSON.parse(body);
        console.log(orderDetails)
        var transDetails = {
          rpay_id: orderDetails.order_id,
          amount: orderDetails.amount,
          status: orderDetails.status,
          user_id: req.body.userId
        }

        const orderid = {
          _id: req.body.order_id
        }

        console.log(JSON.parse(response.body))
        // console.log(response.body.amount)
        console.log(transDetails)
        console.log('Testing');
        console.log(req.body.order_id)
        console.log(`------3`)
        Order.findByIdAndUpdate(req.body.order_id,{"isPaid":"true", "rpay_id":orderDetails.order_id, "amount":orderDetails.amount,"status":orderDetails.status,"paidAt":Date.now()}, function(err,result){
          if(err){
            res.send(err)
          }
          else{
            return res.status(200).json(body);
          }
        })
        
       
        // Order.findOne({
        //   where :{
        //     _id : req.body.order_id
        //   }
        // }).then(order => {
         
        //    if (order) {
            
        //   //   Order.update(
        //   //     { testing: 1 },
        //   //     { where: { _id: req.body.order_id } }
        //   //    // { where: { order_id:req.body.order_id } }
        //   //    // { where: { user_id: req.body.user_id ,order_id:req.body.order_id } }
        //   //   )
           
        //    } else {
        //      res.status(400).json({ error: ' order does not exist' })
        //   }
       
        // })
        //   .catch(err => {
        //     console.log(err);
        //     res.status(400).json({ error: 'fetch err' })
        //   })
        // Order.updateOne(transDetails)
        // .then(transaction => {
        //   return res.status(200).json(body);
        // })
        // .catch(err => {
        //   console.log(`------4`)
        //   return res.send('error' + err)
        // })

      });
  } catch (err) {
    console.log(err);
    console.log(`------5`)
    return res.status(500).json({
      message: err,
    });
  }
});

export default orderRouter;