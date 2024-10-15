import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('asygnal', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой данных успешно установлено.');
  } catch (error) {
    console.error('Не удалось подключиться к базе данных:', error);
  }
};

testConnection();

export default sequelize;