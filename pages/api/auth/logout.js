import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/feachers";
import { asyncError, errorhandler } from  "@/middlewares/error";
import bcrypt from "bcrypt";
const handler= asyncError(async(req,res)=>{
    if(req.method!=="GET") return res.status(400).json({
        success:false,
        message:"Only GET method is allowed"
    })
    
    cookieSetter(res,null,false);

    res.status(200).json({
        success:true,
        message:`Loged out successfully`,
        // user,
    });

});

export default handler;