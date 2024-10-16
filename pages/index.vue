<template>
  <div>
  <h2>Index</h2>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }}
      </li>
    </ul>
    <button @click="fetchUsers">Загрузить пользователей</button>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const fetchUsers = () => {
  userStore.fetchUsers();
  console.log(userStore.users, 'users');
};

onMounted(async () => {
  fetchUsers();
})
</script>
<style lang="scss">

</style>