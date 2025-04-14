import { connectDB } from "@/lib/mongodb";
import Brand from "@/model/brand";

export async function GET(req) {
    await connectDB();

    try {
        const brands = await Brand.find({});
        return Response.json(brands);
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error fetching brands', error }), {
            status: 500,
        });
    }
}
