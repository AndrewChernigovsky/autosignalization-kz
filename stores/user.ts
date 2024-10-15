// stores/userStore.ts
import { defineStore } from 'pinia';
import User from "@/server/models/user";

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as Array<{ id: number; firstName: string; lastName: string }>,
  }),
  
  actions: {
    async fetchUsers() {
      try {
        const users = await User.findAll();
        this.users = users.map(user => user.get({ plain: true }));
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    },    
    async createUser(firstName: string, lastName: string) {
      try {
        const newUser = await User.create({ firstName, lastName });
        this.users.push(newUser.get({ plain: true })); // Добавляем нового пользователя в состояние
      } catch (error) {
        console.error('Ошибка при создании пользователя:', error);
      }
    },
  },
});