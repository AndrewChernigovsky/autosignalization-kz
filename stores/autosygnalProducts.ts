// stores/products.ts
import { defineStore } from 'pinia';
import type { ProductType } from '@/types/ProductType';
import { ref } from 'vue';

export const useAutosygnalStore = defineStore('autosygnal', () => {
  const products = ref<ProductType[]>([
    {
      id: 1, 
      name: "STARLINE E96 V2 BT ECO 2CAN+4LIN", 
      price: 8600,
      totalInCart: 0,
      productType: 'Автосигнализации',
      productDescription: 'Описание товара - Надежный автомобильный охранно-телематический',
      imagesUrl: [{url:'#', description: "STARLINE E96 V2 BT ECO 2CAN+4LIN"}],
      autoType: ['Для внедорожника', 'Для легкового авто'],
      inStock: true,
      descriptions: [
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{url:'#'}]
        },
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{url:'#'}]
        },
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{url:'#'}]
        }
      ],
      features: [
        'Автозапуск', 'Управление предпусковым подогревом'
      ]
    },
    {
      id: 2, 
      name: "STARLINE E96 V2 BT ECO 2CAN+4LIN", 
      price: 3600,
      totalInCart: 0,
      productType: 'Автосигнализации',
      productDescription: 'Описание товара - Надежный автомобильный охранно-телематический',
      imagesUrl: [{url:'#', description: "STARLINE E96 V2 BT ECO 2CAN+4LIN"}],
      autoType: ['Для внедорожника', 'Для легкового авто'],
      inStock: false,
      descriptions: [
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{url:'#'}]
        },
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{url:'#'}]
        },
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{url:'#'}]
        }
      ],
      features: [
        'Автозапуск', 'Управление предпусковым подогревом'
      ]
    },
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