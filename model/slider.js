// models/Slider.js
import mongoose from 'mongoose';

const SliderSchema = new mongoose.Schema({
  image: String,
  title: String,
  subtitle: String,
  subtitlebold: String,
  description: String,
});

export default mongoose.models.Slider || mongoose.model('Slider', SliderSchema);