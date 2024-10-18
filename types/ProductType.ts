type ProductType = {
  id: number
  price: number
  name: string
  image?: {
    src: string
    alt: string
  }
  quantity: number
}

export type { ProductType }
