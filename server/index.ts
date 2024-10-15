// server/index.js
import express from 'express';
import userRoutes from '@/server/api/user';
import sequelize from '@/server/utils/sequelize';

const app = express();
app.use(express.json()); // Для обработки JSON-тел запросов

// Подключение маршрутов
app.use('/api/users', userRoutes);

// Синхронизация базы данных и запуск сервера
const startServer = async () => {
  try {
    await sequelize.sync(); // Синхронизируем модели с базой данных
    console.log('Таблицы были успешно созданы!');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
    
  } catch (error) {
    console.error('Ошибка при синхронизации базы данных:', error);
  }
};

startServer();