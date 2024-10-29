// stores/service.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ServiceType } from '@/types/ServiceType'

import serviceImage1 from '@/assets/images/services/service-1.png'
import serviceImage2 from '@/assets/images/services/service-2.png'
import serviceImage3 from '@/assets/images/services/service-3.png'
import serviceImage4 from '@/assets/images/services/service-4.png'
import serviceImage5 from '@/assets/images/services/service-5.png'
import serviceImage6 from '@/assets/images/services/service-6.png'
import serviceImage7 from '@/assets/images/services/service-7.png'
import serviceImage8 from '@/assets/images/services/service-8.png'
import serviceImage9 from '@/assets/images/services/service-9.png'

export const useServiceStore = defineStore('service', () => {
  const service = ref<ServiceType[]>([
    {
      id: 1,
      title: 'УСТАНОВКА И РЕМОНТ АВТОСИГНАЛИЗАЦИЙ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-1.png',
          description: 'УСТАНОВКА И РЕМОНТ АВТОСИГНАЛИЗАЦИЙ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 2,
      title: 'РЕМОНТ ЦЕНТРОЗАМКОВ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-2.png',
          description: 'РЕМОНТ ЦЕНТРОЗАМКОВ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 3,
      title: 'УСТАНОВКА АВТОЗВУКА И МУЛЬТИМЕДИА ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-3.png',
          description: 'УСТАНОВКА АВТОЗВУКА И МУЛЬТИМЕДИА ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 4,
      title: 'УСТАНОВКА СИСТЕМ ПАРКИНГА ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-4.png',
          description: 'УСТАНОВКА СИСТЕМ ПАРКИНГА ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 5,
      title: 'УСЛУГИ АВТОЭЛЕКТРИКА ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-5.png',
          description: 'УСЛУГИ АВТОЭЛЕКТРИКА ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 6,
      title: 'РУСИФИКАЦИЯ АВТО И ЧИПТЮНИНГ  ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-6.png',
          description: 'РУСИФИКАЦИЯ АВТО И ЧИПТЮНИНГ  ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 7,
      title: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-7.png',
          description: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 8,
      title: 'ОТКЛЮЧЕНИЕ СИГНАЛИЗАЦИИ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-8.png',
          description: 'ОТКЛЮЧЕНИЕ СИГНАЛИЗАЦИИ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
    {
      id: 9,
      title: 'УСТАНОВКА ВИДЕОРЕГИСТРАТОРОВ И АНТИРАДАРОВ',
      price: 6000,
      imageUrl: [
        {
          url: '/images/services/service-9.png',
          description: 'УСТАНОВКА ВИДЕОРЕГИСТРАТОРОВ И АНТИРАДАРОВ',
        },
      ],
      description:
        'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
      serviceDesciption: [
        'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
        'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
        'Установку иммобилайзеров и противоугонных систем.',
        'Установку сигнализаций с функцией GSM и GPS.',
      ],
    },
  ])

  function setNewService(newService: ServiceType) {
    service.value.push(newService)
  }

  function getService() {
    return service.value
  }

  return {
    service,
    setNewService,
    getService,
  }
})
