// server/api/user.js
import express from 'express';
import User from '@/server/models/user';

const router = express.Router();

// Получить всех пользователей
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Создать нового пользователя
router.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;
  
  try {
    const newUser = await User.create({ firstName, lastName });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Ошибка при создании пользователя:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

export default router;