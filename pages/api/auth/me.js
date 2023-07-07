
import { asyncError, errorhandler } from "@/middlewares/error";
import { cheakAuth } from "@/utils/feachers";

const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorhandler(res, 400, "Only GET Method is allowed");

  const user = await cheakAuth(req);

  if (!user) return errorhandler(res, 401, "Login First");

  res.status(200).json({
    success: true,
    user,
  });
});

export default handler;