const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({

  requestId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ServiceRequest"
  },

  providerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  price:{
    type:Number,
    required:true
  },

  message:String,

  daysToComplete:Number,

  status:{
    type:String,
    enum:["pending","accepted","rejected"],
    default:"pending"
  }

},{timestamps:true});

quoteSchema.index({requestId:1});

module.exports = mongoose.model("Quote",quoteSchema);