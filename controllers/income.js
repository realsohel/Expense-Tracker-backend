import Income from "../models/income.js";

export const addIncome = async(req,res)=>{
    const {title,amount,description,category,date} = req.body;
    try {
        const income = Income({
            title,amount,description,category ,date
        })

        if(!title || !description || !category || !date)
            return res.status(400).json({
                    status:400,
                    message:"All fields are required"
                });
        
        if(amount<=0 || !amount==='number')
            return res.json({
                    status:400,
                    message:"amount must me a postive number."
                })
    
        await income.save()
        // console.log(income)
        return res.status(200).json({
                    status:200,
                    message:"Income added successfully"
                });

    } catch (error) {
        // console.log(error.message)
        return res.status(500).json({
            status:500,
            message:"Internal server error, please try again later."});
    }
    
}

export const getIncomes = async(req,res)=>{

    try {
        const gettingincomes = await Income.find().sort({createdAt: -1});
        res.status(200).json(gettingincomes);
    } catch (error) {
        // console.log(error.message)
        res.status(500).json({message:"Internal server error, please try again later."});
    }
}

export const deleteIncome = async(req,res)=>{
        const{id} = req.params
    try {
        await Income.findByIdAndDelete(id);
        res.status(200).json({message:"Income deleted successfully"});
    } catch (error) {
        // console.log(error.message)
        res.status(500).json({message:"Internal server error, please try again later."});
    }
}