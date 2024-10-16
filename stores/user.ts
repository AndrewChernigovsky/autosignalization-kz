// stores/userStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as Array<{ id: number; firstName: string; lastName: string }>,
  }),
  
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const users = await response.json();
        this.users = users; // Update state with fetched users
        console.log(this.users, 'users');
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    }
  },
});