import mongoose from 'mongoose';

const BestProduct = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number,
});

export default mongoose.models.Product || mongoose.model('Product', BestProduct);
