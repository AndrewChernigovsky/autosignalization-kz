// stores/products.ts
import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useAutosygnalStore = defineStore('autosygnalStore', () => {
  const products = ref<ProductType[]>([
    {
      id: 1,
      title: 'StarLine E96 v2',
      price: 127300,
      quantity: 1,
      productType: [
        'Автосигнализации с автозапуском',
        'Автосигнализации с GSM',
      ],
      category: [
        'Автозапуск',
        'Управление с телефона',
        'Бесплатный мониторинг',
        'Умная авторизация по Bluetooth Smart',
        'Управление предпусковым подогревом',
        'Блокировка двигателя по CAN',
        'Умная автодиагностика',
        'Данные о пробеге и уровне топлива',
      ],
      autoType: ['Для легкового авто', 'Для внедорожника'],
      totalInCart: 0,
      inStock: true,
      imagesSrc: [
        '/images/products/autosygnal/StarLine E96 v2/StarLine E96 v2 1.png',
        '/images/products/autosygnal/StarLine E96 v2/StarLine E96 v2 2.png',
        '/images/products/autosygnal/StarLine E96 v2/StarLine E96 v2 3.png',
        '/images/products/autosygnal/StarLine E96 v2/StarLine E96 v2 4.png',
      ],
      productDescription:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском с вашего смартфона, несканируемым диалоговым кодом управления, возможностью авторизации по защищенной технологии через смартфон и метку, интегрированным 2CAN+4LIN. Благодаря GSM интерфейсу обеспечивается возможность управления комплексом из любой точки мира.',
      descriptions: [
        {
          title: 'РАСШИРЕННЫЙ ДИАПАЗОН ТЕМПЕРАТУР',
          description:
            'StarLine уверенно работает в суровых климатических условиях при температуре от минус 40 до плюс 85 °С благодаря высококачественным комплектующим',
          imageUrl: '/images/description-icons/geo.png',
        },
        {
          title: 'УМНЫЙ ДИАЛОГ',
          description:
            'Умный диалоговый код управления c индивидуальными ключами шифрования гарантирует надежную защиту от всех известных кодграбберов',
          imageUrl: '/images/description-icons/i-key.png',
        },
        {
          title: 'ЗАЩИТА ОТ РАДИОПОМЕХ',
          description:
            'StarLine уверенно работает в условиях экстремальных городских радиопомех',
          imageUrl: '/images/description-icons/gps.png',
        },
        {
          title: 'УМНЫЙ 3D КОНТРОЛЬ',
          description:
            'Интеллектуальный 3D-контроль с дистанционной настройкой регистрирует удары, поддомкрачивание и эвакуацию автомобиля и оценивает безопасность вождения',
          imageUrl: '/images/description-icons/gsm.png',
        },
      ],
    },
    {
      id: 2,
      title: 'Starline S96 V2',
      price: 110900,
      quantity: 0,
      productType: [
        'Автосигнализации без автозапуска',
        'Автосигнализации с GSM',
      ],
      category: [
        'Автозапуск',
        'Управление с телефона',
        'Бесплатный мониторинг',
        'Умная авторизация по Bluetooth Smart',
        'Управление предпусковым подогревом',
        'Блокировка двигателя по CAN',
        'Умная автодиагностика',
        'Данные о пробеге и уровне топлива',
      ],
      autoType: ['Для легкового авто', 'Для внедорожника'],
      totalInCart: 0,
      inStock: false,
      imagesSrc: [
        '/images/products/autosygnal/StarLine S96 v2/StarLine S96 v2 1.png',
        '/images/products/autosygnal/StarLine S96 v2/StarLine S96 v2 2.png',
      ],
      productDescription:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском с вашего смартфона, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку, интегрированными 2CAN+4LIN, LTE (4G), GPS-ГЛОНАСС интерфейсами.',
    },
  ])

  function setNewProducts(newProducts: ProductType) {
    products.value.push(newProducts)
  }

  function getProducts() {
    return products.value
  }

  return {
    products,
    setNewProducts,
    getProducts,
  }
})
