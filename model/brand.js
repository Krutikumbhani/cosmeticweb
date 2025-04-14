import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
    image: String,
    brandName: String
});

export default mongoose.models.Brand || mongoose.model('Brand', BrandSchema);
