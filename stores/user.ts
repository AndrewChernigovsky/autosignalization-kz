import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserType } from '@/types/UserType';

export const useUserStore = defineStore('user', () => {
  const users = ref<UserType[]>([]);

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      users.value = await response.json();
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error);
    }
  };

  return {
    users,
    fetchUsers,
  };
});
