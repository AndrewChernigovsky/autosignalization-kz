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
}

export type { PopularProductsType }
