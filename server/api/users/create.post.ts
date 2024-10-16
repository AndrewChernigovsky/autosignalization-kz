import { UserModel } from "@/server/models/User.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userExist = await UserModel.findOne({ where: { email: body.email } });
  if (userExist) {
    throw createError({
      message: "Sorry, this email is taken",
    });
  }
  // create user
  const user = await UserModel.create(body);
  return user;
});
