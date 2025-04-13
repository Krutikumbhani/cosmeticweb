import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET() {
    try {
        await connectDB();
        const products = await Product.find({});
        return Response.json(products);
    } catch (error) {
        return new Response('Error fetching products', { status: 500 });
    }
}
