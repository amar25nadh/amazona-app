import express from 'express';
const transactionRouter = express.Router()
import cors from 'cors'
import Order from '../models/orderModel.js';
transactionRouter.post('/getTransactions', (req, res) => {
    const data ={
       user_id:req.body.userId,
     // order_status:'ordered' 
    }
    Order.findAll({
      where:  data
      //{
      //   user_id: req.body.userId,
      //   ordered: 0
      // }
    })
      .then(tran => {
        if (tran) {
          console.log(tran);
          res.status(200).json({ tran })
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
  
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err })
      })
  })


  transactionRouter.post('/currentTransactions', (req, res) => {
    const data ={
     // 
      //  user:req.body.userId,
         user_id : req.body.userId,
         _id:req.body.order_id,
    }
    
    Order.find({
      _id:req.body.order_id
      // where:data
      // //{
      // //   user_id: req.body.userId,
      // //   ordered: 0
      // // }
    })
      .then(tran => {
        if (tran) {
          console.log(`-----tran log---`)
          console.log(tran);
          console.log(`-----tran log---`)
          res.status(200).json({ tran })
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
  
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err })
      })
  })

  export default transactionRouter;