// stores/service.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ServiceType } from '@/types/ServiceType'

export const useServiceStore = defineStore('service', () => {
  const service = ref<ServiceType[]>([
    {
        id: 1,
        title: 'УСТАНОВКА И РЕМОНТ АВТОСИГНАЛИЗАЦИЙ',
        price: 6000,
        imageUrl: [{url: '#', description: 'УСТАНОВКА И РЕМОНТ АВТОСИГНАЛИЗАЦИЙ'}],
        description: 'Вы купили автомобиль и желаете защитить его, установив сигнализацию? Вы любите комфорт и хотите установить автозапуск на Ваше авто? Вам необходимо отслеживать Ваш транспорт по GPS?Обращайтесь к нам, и мы поможем Вам решить эти задачи!',
        serviceDesciption: [
            'Продажу автосигнализаций, охранных комплексов, маяков GPS и мн.др.',
            'Профессиональную установку, ремонт, и настройку автосигнализаций различных брендов.',
            'Установку иммобилайзеров и противоугонных систем.',
            'Установку сигнализаций с функцией GSM и GPS.',
        ]
    }
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

