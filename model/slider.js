// // models/Slider.js
// import mongoose from 'mongoose';

// const SliderSchema = new mongoose.Schema({
//   image: String,
//   title: String,
//   subtitle: String,
//   subtitlebold: String,
//   description: String,
// });

// export default mongoose.models.Slider || mongoose.model('Slider', SliderSchema);


// model/slider.js

import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  image: String,
  title: String,
  subtitle: String,
  subtitlebold: String,
  description: String,
});

// 👇 Force the model to use the "slider" collection name
export default mongoose.models.Slider || mongoose.model("Slider", sliderSchema, "slider");
