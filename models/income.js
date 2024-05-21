import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:20,
    },
    ammount:{
        type:Number,
        required:true,
        trim:true,
        maxlength:20,
    },
    type:{
        type:String,
        default:"income",
    },
    date:{
        type:Date,
        required:true,
        trim:true,
        maxlength:20,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:20,
    },
},{timestamps:true})

export default mongoose.model("Income",IncomeSchema);