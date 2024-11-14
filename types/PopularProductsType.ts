type PopularProductsType = {
  id: number
  name: string
  category: string
  images?: string[]
  price: number
  currency: string
  description?: string
  quantity: number
  inStock: boolean
  tabs?: {
    descriptions: [
      {
        img?: string
        title: string
        desc: string
      },
    ]
    characters: [
      {
        functions: string
        categories: string
      },
    ]
    garanties: [{ text: string }]
    similar: PopularProductsType[]
  }
}

export type { PopularProductsType }
