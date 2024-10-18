// stores/products.ts
import { defineStore } from 'pinia';
import type { ProductType } from '@/types/ProductType';
import { ref } from 'vue';

export const useParkSystemStore = defineStore('parkSystem', () => {
  const products = ref<ProductType[]>([
    {
      id: 1, 
      name: "STARLINE E96 V2 BT ECO 2CAN+4LIN", 
      price: 5600,
      totalInCart: 0,
      productType: 'Парковочные системы',
      productDescription: 'Камера заднего вида с инфракрасной подсветкой',
      inStock: true,
      imagesUrl: [{url:'#', description: "STARLINE E96 V2 BT ECO 2CAN+4LIN"}],
      features: [
        'Матрица Color CCD PC3030', 'Разрешение: 628x586 пикселей', 'Материал корпуса: пластик']
    },
    {
      id: 2, 
      name: "STARLINE E96 V2 BT ECO 2CAN+4LIN", 
      price: 52600,
      totalInCart: 0,
      productType: 'Парковочные системы',
      productDescription: 'Камера заднего вида с инфракрасной подсветкой',
      inStock: false,
      imagesUrl: [{url:'#', description: "STARLINE E96 V2 BT ECO 2CAN+4LIN"}],
      features: [
        'Матрица Color CCD PC3030', 'Разрешение: 628x586 пикселей', 'Материал корпуса: пластик']
    }
  ]);

  function setNewProducts(newProducts: ProductType) {
    products.value.push(newProducts);
  }

  function getProducts() {
    return products.value;
  }

  return {
    products,  setNewProducts, getProducts
  }
});