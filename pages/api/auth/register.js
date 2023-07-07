import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/feachers";
import { asyncError, errorhandler } from  "@/middlewares/error";
import bcrypt from "bcrypt";

const handler= asyncError(async(req,res)=>{
    if(req.method!=="POST") return res.status(400).json({
        success:false,
        message:"Only POST method is allowed"
    })
    const {name,email,password}=req.body;
    if(!name || !email || !password) return errorhandler(res,400,"Please enter all fields");

    await connectDB();
    let user =await User.findOne({email});
    if(user) return errorhandler(res,400,"User registered with this email");

    const hashedPassword = await bcrypt.hash(password,10)

    user = await User.create({
        name,email,password:hashedPassword,
    }); 
    
    const token =generateToken(user._id);
    cookieSetter(res,token,true);

    res.status(201).json({
        success:true,
        message:"Registered successfully",
        user,
    });

});

export default handler;