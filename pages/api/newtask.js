import { cheakAuth, connectDB } from "@/utils/feachers";
import { asyncError, errorhandler } from "@/middlewares/error";
import { Task } from "@/models/task";


const handler = asyncError(async (req, res) => {
    if (req.method !== "POST")
      return errorhandler(res, 400, "Only POST Method is allowed");
    await connectDB();
  
    const { title, description } = req.body;
  
    if (!title || !description)
      return errorhandler(res, 400, "Please Enter All fields");
  
    const user = await cheakAuth(req);
    if (!user) return errorhandler(res, 401, "Login First");
  
    await Task.create({
      title,
      description,
      user: user._id,
    });
  
    res.json({
      success: true,
      message: "Task Created",
    });
  });
  
  export default handler;