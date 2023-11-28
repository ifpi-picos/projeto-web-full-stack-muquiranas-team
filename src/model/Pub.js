const { ObjectId } = require("mongodb");

const mongoose = require("../database").default;

const PubSchema = new mongoose.Schema({
  _id:{
    type: ObjectId,
  },
  
  user: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productLink: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },

  favorited: {
    type: Boolean,
    default: false,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Publi = mongoose.model("Publi", PubSchema);

module.exports = Publi;
