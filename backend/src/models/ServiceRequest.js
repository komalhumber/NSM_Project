const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },

  description:{
    type:String,
    required:true
  },

  categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
  },

  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  location:String,

  status:{
    type:String,
    enum:["open","quoted","assigned","completed","cancelled"],
    default:"open"
  },

  acceptedQuoteId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Quote"
  }

},{timestamps:true});

requestSchema.index({title:"text",description:"text"});

module.exports = mongoose.model("ServiceRequest",requestSchema);