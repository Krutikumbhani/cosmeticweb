import { connectDB } from '@/lib/mongodb';
import Slider from '@/model/slider';

export async function GET() {
  try {
    await connectDB();
    const sliders = await Slider.find({});
    console.log("✅ Sliders found:", sliders);
    return Response.json(sliders);
  } catch (err) {
    console.error("❌ Error fetching sliders:", err);
    return new Response("Failed to fetch sliders", { status: 500 });
  }
}
