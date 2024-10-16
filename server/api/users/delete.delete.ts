import { UserModel } from "@/server/models/User.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const userExist = await UserModel.findOne({ where: { email: body.email } });
  
  if (!userExist) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
      message: "User not found with this email",
    });
  }

  try {
    await UserModel.destroy({
      where: { email: body.email },
    });

    return {
      message: "User deleted successfully",
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Failed to delete user",
    });
  }
});