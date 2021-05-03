import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    order_id: { type: Number, required: true },
    razorpay_order_id: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    user_id:{type:Number, required:true},
    
  },
  {
    timestamps: true,
  }
);
const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;