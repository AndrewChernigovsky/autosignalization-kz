export default defineNitroPlugin(async (nitro) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error);
  }
});
