import Expense from "../models/expense.js";

export const addExpense = async(req,res)=>{
    const {title,amount,description,category,date} = req.body;
    try {
        const expense = Expense({
            title,amount,description,category ,date
        })

        if(!title || !description || !category || !date)
            return res.status(400).json({message:"All fields are required"});
        
        if(amount<=0 || !amount==='number')
            return res.status(400).json({message:"amount must me a postive number."})
    
        await expense.save()
        // console.log(expense)
        res.status(200).json({message:"Expense added successfully"});

    } catch (error) {
        // console.log(error.message)
        res.status(500).json({message:"Internal server error, please try again later."});
    }
    
}

export const getExpense = async(req,res)=>{

    try {
        const gettingexpense = await Expense.find().sort({createdAt: -1});
        res.status(200).json(gettingexpense);
    } catch (error) {
        // console.log(error.message)
        res.status(500).json({message:"Internal server error, please try again later."});
    }
}

export const deleteExpense = async(req,res)=>{
        const{id} = req.params
    try {
        await Expense.findByIdAndDelete(id);
        res.status(200).json({message:"Expense deleted successfully"});
    } catch (error) {
        // console.log(error.message)
        res.status(500).json({message:"Internal server error, please try again later."});
    }
}