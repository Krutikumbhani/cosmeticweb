// /app/api/bestproduct/route.js or /pages/api/bestproduct.js

import { connectDB } from '@/lib/mongodb';
import bestproduct from '@/model/bestproduct';

export async function GET(req, res) {
    await connectDB();

    try {
        const products = await bestproduct.find({}).lean({ virtuals: true }); // <- important
        return Response.json(products);
    } catch (error) {
        return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}
