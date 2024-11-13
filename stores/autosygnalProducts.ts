// stores/products.ts
import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useAutosygnalStore = defineStore('autosygnalStore', () => {
  const products = ref<ProductType[]>([
    {
      id: 11,
      title: 'Starline A93 ECO V2',
      price: 56100,
      quantity: 0,
      productType: [
        'Автосигнализации с автозапуском',
        'Каталог автосигнализаций Starline',
      ],
      category: ['Автозапуск', 'Управление предпусковым подогревом'],
      autoType: ['Для легкового авто', 'Для внедорожника'],
      totalInCart: 0,
      inStock: true,
      imagesSrc: [
        '/images/products/autosygnal/Starline-A93-ECO-V2/img1.png',
        '/images/products/autosygnal/Starline-A93-ECO-V2/img2.png',
        '/images/products/autosygnal/Starline-A93-ECO-V2/img3.png',
        '/images/products/autosygnal/Starline-A93-ECO-V2/img4.png',
      ],
      productDescription:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, опциональными 2CAN+2LIN и GSM интерфейсами, опциональным GPS-ГЛОНАСС мониторингом, ударопрочным брелком управления, 128-канальным помехозащищенным трансивером с дальностью оповещения до 2000 м',
      descriptions: [
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description:
            'Диалоговый код управления StarLine c индивидуальными ключами шифрования 128 бит гарантирует надежную защиту от всех известных кодграбберов',
          imageUrl: '/images/description-icons/geo.png',
        },
        {
          title: 'ЗАЩИТА ОТ РАДИОПОМЕХ',
          description:
            'StarLine уверенно работает в условиях экстремальных городских радиопомех, благодаря уникальному 128-канальному трансиверу',
          imageUrl: '/images/description-icons/i-key.png',
        },
        {
          title: 'SUPER SLAVE (ОПЦИЯ)',
          description:
            'Управление охраной автомобиля штатным брелком с надежной дополнительной диалоговой авторизацией брелком StarLine. Опция доступна при интеграции 2CAN+2LIN интерфейса',
          imageUrl: '/images/description-icons/gps.png',
        },
        {
          title: 'РАСШИРЕННЫЙ ДИАПАЗОН ТЕМПЕРАТУР',
          description:
            'StarLine уверенно работает в суровых климатических условиях при температуре от минус 50 до плюс 85 °С благодаря высококачественным комплектующим',
          imageUrl: '/images/description-icons/gsm.png',
        },
      ],
    },
    {
      id: 12,
      title: 'StarLine E96 V2 BT ECO 2CAN+4LIN',
      price: 86600,
      quantity: 0,
      productType: [
        'Автосигнализации с автозапуском',
        'Каталог автосигнализаций Starline',
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
      totalInCart: 0,
      inStock: true,
      imagesSrc: [
        '/images/products/autosygnal/StarLine-E96-V2-BT-ECO-2CAN+4LIN/img1.png',
        '/images/products/autosygnal/StarLine-E96-V2-BT-ECO-2CAN+4LIN/img2.png',
      ],
      productDescription:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine, интегрированным 2CAN+4LIN интерфейсом, ударопрочным брелком управления, помехозащищенным трансивером с малошумящим усилителем',
      descriptions: [
        {
          description:
            'StarLine уверенно работает в суровых климатических условиях при температуре от минус 40 до плюс 85 °С благодаря высококачественным комплектующим',
          title: 'РАСШИРЕННЫЙ ДИАПАЗОН ТЕМПЕРАТУР',
          imageUrl: '/images/description-icons/geo.png',
        },
        {
          description:
            'Только владелец получает разрешение на поездку после авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine.',
          title: 'УМНАЯ АВТОРИЗАЦИЯ',
          imageUrl: '/images/description-icons/gps.png',
        },
        {
          description:
            'Умный диалоговый код управления c индивидуальными ключами шифрования гарантирует надежную защиту от всех известных кодграбберов',
          title: 'УМНЫЙ ДИАЛОГ',
          imageUrl: '/images/description-icons/gsm.png',
        },
        {
          description:
            'StarLine уверенно работает в условиях экстремальных городских радиопомех, благодаря уникальному узкополосному трансиверу с малошумящим усилителем',
          title: 'РАСШИРЕННЫЙ ДИАПАЗОН ТЕМПЕРАТУР',
          imageUrl: '/images/description-icons/i-key.png',
        },
      ],
    },
    {
      id: 13,
      title: 'StarLine S96 V2 BT 2CAN2LIN GSM',
      price: 98300,
      quantity: 0,
      productType: [
        'Автосигнализации с автозапуском',
        'Автосигнализации с GSM',
        'Каталог автосигнализаций Starline',
      ],
      category: [
        'Автозапуск',
        'Управление с телефона',
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
        '/images/products/autosygnal/StarLine-S96-V2-BT-2CAN2LIN-GSM/img1.png',
        '/images/products/autosygnal/StarLine-S96-V2-BT-2CAN2LIN-GSM/img2.png',
      ],
      productDescription:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine, интегрированным 2CAN+4LIN интерфейсом, ударопрочным брелком управления, помехозащищенным трансивером с малошумящим усилителем',
      descriptions: [
        {
          description:
            'Диалоговый код управления StarLine c индивидуальными ключами шифрования 128 бит гарантирует надежную защиту от всех известных кодграбберов',
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          imageUrl: '/images/description-icons/geo.png',
        },
        {
          description:
            'StarLine уверенно работает в условиях экстремальных городских радиопомех, благодаря уникальному 128-канальному трансиверу',
          title: 'ЗАЩИТА ОТ РАДИОПОМЕХ',
          imageUrl: '/images/description-icons/gps.png',
        },
        {
          description:
            'Управление охраной автомобиля штатным брелком с надежной дополнительной диалоговой авторизацией брелком StarLine. Опция доступна при интеграции 2CAN+2LIN интерфейса',
          title: 'SUPER SLAVE (ОПЦИЯ)',
          imageUrl: '/images/description-icons/gsm.png',
        },
        {
          description:
            'StarLine уверенно работает в суровых климатических условиях при температуре от минус 50 до плюс 85 °С благодаря высококачественным комплектующим',
          title: 'РАСШИРЕННЫЙ ДИАПАЗОН ТЕМПЕРАТУР',
          imageUrl: '/images/description-icons/i-key.png',
        },
      ],
    },
    {
      id: 14,
      title: 'StarLine A93 V2',
      price: 64300,
      quantity: 0,
      productType: [
        'Автосигнализации с автозапуском',
        'Каталог автосигнализаций Starline',
      ],
      category: ['Автозапуск', 'Управление предпусковым подогревом'],
      autoType: ['Для легкового авто', 'Для внедорожника'],
      totalInCart: 0,
      inStock: true,
      imagesSrc: [
        '/images/products/autosygnal/StarLine-A93-V2/img1.png',
        '/images/products/autosygnal/StarLine-A93-V2/img2.png',
        '/images/products/autosygnal/StarLine-A93 V2/img3.png',
        '/images/products/autosygnal/StarLine-A93-V2/img4.png',
        '/images/products/autosygnal/StarLine-A93-V2/img5.png',
      ],
      productDescription:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, опциональными 2CAN+LIN и GSM интерфейсами, опциональным GPS-ГЛОНАСС мониторингом, ударопрочным брелком управления, 128-канальным помехозащищенным трансивером с дальностью оповещения до 2000 м',
      descriptions: [
        {
          description:
            'Диалоговый код управления StarLine c индивидуальными ключами шифрования 128 бит гарантирует надежную защиту от всех известных кодграбберов',
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          imageUrl: '/images/description-icons/geo.png',
        },
        {
          description:
            'StarLine уверенно работает в условиях экстремальных городских радиопомех, благодаря уникальному 128-канальному трансиверу',
          title: 'ЗАЩИТА ОТ РАДИОПОМЕХ',
          imageUrl: '/images/description-icons/gps.png',
        },
        {
          description:
            'Управление охраной автомобиля штатным брелком с надежной дополнительной диалоговой авторизацией брелком StarLine. Опция доступна при интеграции 2CAN+2LIN интерфейса',
          title: 'SUPER SLAVE (ОПЦИЯ)',
          imageUrl: '/images/description-icons/gsm.png',
        },
        {
          description:
            'StarLine уверенно работает в суровых климатических условиях при температуре от минус 50 до плюс 85 °С благодаря высококачественным комплектующим',
          title: 'РАСШИРЕННЫЙ ДИАПАЗОН ТЕМПЕРАТУР',
          imageUrl: '/images/description-icons/i-key.png',
        },
      ],
    },
    {
      id: 15,
      title: 'Starline A60 Eco',
      price: 38000,
      quantity: 0,
      productType: [
        'Автосигнализации без автозапуска',
        'Каталог автосигнализаций Starline',
      ],
      autoType: ['Для легкового авто', 'Для внедорожника'],
      totalInCart: 0,
      inStock: true,
      imagesSrc: [
        '/images/products/autosygnal/Starline-A60-Eco/img1.png',
        '/images/products/autosygnal/Starline-A60-Eco/img2.png',
        '/images/products/autosygnal/Starline-A60-Eco/img3.png',
        '/images/products/autosygnal/Starline-A60-Eco/img4.png',
      ],
      productDescription:
        'Умный охранно-телематический комплекс StarLine А60 включает лучшие решения в области автобезопасности и гарантирует надежную защиту от угона благодаря устойчивому к электронному взлому диалоговому коду управления и широким возможностям для авторских блокировок двигателя. А гибкие настройки сервисных функций подарят вашему автомобилю уровень комфорта премиум-класса',
    },
    {
      id: 16,
      title: 'Пульт Starline A93/A63',
      price: 27000,
      quantity: 0,
      productType: ['Пульты и аксессуары'],
      totalInCart: 0,
      inStock: true,
      imagesSrc: ['/images/products/autosygnal/Starline-A93-A63/img1.png'],
      productDescription:
        ' Пульт на автосигнализацию Starline A93/A63 с жидкокристаллическим дисплеем',
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
