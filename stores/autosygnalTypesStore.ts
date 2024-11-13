type product = {
  id: number
  title: string
}

type autosygnalTypes = {
  id: number
  title: string
  img?: string
  product?: product[]
}

export const useAutosygnalType = defineStore('autosygnalType', () => {
  const types = ref<autosygnalTypes[]>([
    {
      id: 1,
      title: 'Автосигнализации с автозапуском',
      img: '/images/autosygnals/img1.jpeg',
      product: [
        {
          id: 11,
          title: 'Starline A93 ECO V2',
        },
        {
          id: 12,
          title: 'StarLine E96 V2 BT ECO 2CAN+4LIN',
        },
        {
          id: 13,
          title: 'StarLine S96 V2 BT 2CAN2LIN GSM',
        },
        {
          id: 14,
          title: 'StarLine A93 V2',
        },
      ],
    },
    {
      id: 2,
      title: 'Автосигнализации с GSM ',
      img: '/images/autosygnals/img2.jpeg',
      product: [
        {
          id: 13,
          title: 'StarLine S96 V2 BT 2CAN2LIN GSM',
        },
      ],
    },
    {
      id: 3,
      title: 'Автосигнализации без автозапуска',
      img: '/images/autosygnals/img3.jpeg',
      product: [
        {
          id: 15,
          title: 'Starline A60 Eco',
        },
      ],
    },
    {
      id: 4,
      title: 'Каталог автосигнализаций Starline',
      img: '/images/autosygnals/img4.jpeg',
      product: [
        {
          id: 11,
          title: 'Starline A93 ECO V2',
        },
        {
          id: 12,
          title: 'StarLine E96 V2 BT ECO 2CAN+4LIN',
        },
        {
          id: 13,
          title: 'StarLine S96 V2 BT 2CAN2LIN GSM',
        },
        {
          id: 14,
          title: 'StarLine A93 V2',
        },
        {
          id: 15,
          title: 'Starline A60 Eco',
        },
      ],
    },
    {
      id: 5,
      title: 'ПУЛЬТЫ И АКСЕССУАРЫ',
      img: '/images/autosygnals/img5.jpeg',
      product: [
        {
          id: 16,
          title: 'Пульт Starline A93/A63',
        },
      ],
    },
  ])

  function getData() {
    return types.value
  }

  function setNewType(newType: autosygnalTypes) {
    types.value.push(newType)
  }
  return {
    types,
    getData,
    setNewType,
  }
})
