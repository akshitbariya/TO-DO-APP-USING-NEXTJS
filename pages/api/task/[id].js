import { cheakAuth, connectDB } from "@/utils/feachers";
import { asyncError, errorhandler } from "@/middlewares/error";
import { Task } from "@/models/task";

const handler =asyncError(async(req,res)=>{
await connectDB();
const user=await cheakAuth(req);
if (!user) return errorhandler(res, 401, "Login First");

const taskId= req.query.id;
const task = await Task.findById(taskId);
if(!task) return errorhandler(res,404,"Task not found");

    if(req.method==="PUT"){

        task.isCompleted = !task.isCompleted;
        await task.save();
        
        res.status(200).json({
            success:true,
            message:"Task Updated Successfully"
        });
    }
    else if (req.method==="DELETE"){
        await task.deleteOne();

        res.status(200).json({
          success: true,
          message: "Task Deleted Successfully",});
    }
    else {
        errorhandler(res,400,"THIS METHOD IS NOT AVAILABLE")
    }
    
});

export default handler;


