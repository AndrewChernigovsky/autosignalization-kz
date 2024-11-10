type product = {
  id: number
  title: string
}

type autosygnalTypes = {
  id: number
  title: string
  product?: product[]
}

export const useAutosygnalType = defineStore('autosygnalType', () => {
  const types = ref<autosygnalTypes[]>([
    {
      id: 1,
      title: 'Автосигнализации с автозапуском',
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
})
