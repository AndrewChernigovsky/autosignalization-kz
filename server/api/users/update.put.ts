// server/api/update.update.ts
import { UserModel } from "@/server/models/User.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Read request body

  // Check if the user exists based on email
  const userExist = await UserModel.findOne({ where: { email: body.email } });
  
  if (!userExist) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
      message: "User not found with this email",
    });
  }

  // Update user data
  try {
    const updatedUser = await UserModel.update(body, {
      where: { email: body.email }, // Specify the condition for updating
    });

    return {
      message: "User updated successfully",
      user: updatedUser,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Failed to update user",
    });
  }
});