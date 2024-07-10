const mongoose = require( 'mongoose')


const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      public_id: { type: String },
      url: { type: String },
    },
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("categories", CategorySchema);
module.exports = categoryModel;

