import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
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
        default:"expense",
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

export default mongoose.model("Expense",ExpenseSchema);