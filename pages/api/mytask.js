import { cheakAuth, connectDB } from "@/utils/feachers";
import {Task} from "../../models/task"
import { errorhandler } from "@/middlewares/error";

const handler =async(req,res)=>{
    
    if(req.method!=="GET") return errorhandler(res,400,"only POST")
    
    await connectDB();
    
    const user=await cheakAuth(req);
// 1:17:14
if (!user) return errorhandler(res, 401, "Login First");
    const tasks= await Task.find({user:user._id});
   
    res.json({
    success:true,
    tasks,
});
};

export default handler


