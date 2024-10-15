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
    <h2>Создать пользователя</h2>
    <input v-model="firstName" placeholder="Имя" />
    <input v-model="lastName" placeholder="Фамилия" />
    <button @click="createUser">Создать пользователя</button>
  </div>
</template>
<script lang="ts" setup>import { ref } from 'vue';
  import type { ProductType } from "@/types/ProductType";
  import { useProductStore } from "@/stores/data/data"; 
  import { useUserStore } from "@/stores/user";

  const firstName = ref('');
  const lastName = ref('');

const userStore = useUserStore();

const fetchUsers = () => {
  userStore.fetchUsers();
};

  const productStore = useProductStore();

  const products: ProductType[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 110 }
  ];

  productStore.setProducts(products);
  console.log(productStore.getProducts());
  const createUser = async () => {
  if (firstName.value && lastName.value) {
    await userStore.createUser(firstName.value, lastName.value);
    firstName.value = ''; // Сбросить поле ввода имени
    lastName.value = ''; // Сбросить поле ввода фамилии
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
};
</script>
<style lang="scss">

</style>