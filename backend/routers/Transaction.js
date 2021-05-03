import express from 'express';
const trans = express.Router()
import cors from 'cors'
import Order from '../models/orderModel.js';
trans.post('/getTransactions', (req, res) => {
    const data ={
       user_id:req.body.userId,
     // order_status:'ordered' 
    }
    Trans.findAll({
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