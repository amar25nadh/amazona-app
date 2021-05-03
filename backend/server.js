import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import transactionRouter from './routers/transactionRouter.js';


dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders',orderRouter);
app.use('/api/transaction',transactionRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});