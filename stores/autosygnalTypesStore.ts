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
          id: 1,
          title: 'StarLine E96 v2',
        },
        {
          id: 2,
          title: 'Starline S96 V2',
        },
      ],
    },
    {
      id: 2,
      title: 'Автосигнализации с GSM ',
      img: '/images/autosygnals/img2.jpeg',
      product: [
        {
          id: 1,
          title: 'StarLine E96 v2',
        },
      ],
    },
    {
      id: 3,
      title: 'Автосигнализации без автозапуска',
      img: '/images/autosygnals/img3.jpeg',
      product: [
        {
          id: 1,
          title: 'StarLine E96 v2',
        },
        {
          id: 2,
          title: 'Starline S96 V2',
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
