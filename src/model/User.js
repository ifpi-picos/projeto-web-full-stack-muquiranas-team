const mongoose = require("../database");
const bccryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  
  publi:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publi",
    required: true,
  },
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  
 userPosts: {
    type: Number,
    default: 0,
    required: false,
  },

  

});

UserSchema.pre("save", async function (next){
  const hash = await bccryptjs.hash(this.password, 10);
  this.password = hash;
  this._id = new mongoose.Types.ObjectId();
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
