import mongoose from 'mongoose';

const BestProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number,
    originalprice: Number,
});

// Add a virtual field for discount percentage
BestProductSchema.virtual('discount').get(function () {
    if (!this.originalprice || this.originalprice === 0) return 0;
    const discount = ((this.originalprice - this.price) / this.originalprice) * 100;
    return Math.round(discount); // Rounded to whole number
});

// Make sure virtuals are included when using .toJSON()
BestProductSchema.set('toJSON', { virtuals: true });
BestProductSchema.set('toObject', { virtuals: true });

export default mongoose.models.Product || mongoose.model('Product', BestProductSchema);
