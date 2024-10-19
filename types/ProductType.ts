import type { ImagesType } from '@/types/ImagesType'

type DescriptionType = {
  title: string
  description?: string
  imageUrl?: ImagesType[]
}

type ProductType = {
  id: number
  name: string
  price: number
  totalInCart?: number
  productType?: string
  inStock?: boolean
  imagesUrl?: ImagesType[] | string
  productDescription?: string
  autoType?: string[] | string
  features?: string[]
  descriptions?: DescriptionType[]
  image?: {
    src: string
    alt: string
  }
  quantity: number
}

export type { ProductType }
