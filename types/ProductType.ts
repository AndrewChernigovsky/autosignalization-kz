import type { ImagesType } from '@/types/ImagesType'

type DescriptionType = {
  title?: string
  description: string
  imageUrl?: string
}

type ProductType = {
  id: number
  title: string
  price: number
  quantity: number
  productType?: string[]
  category?: string[]
  autoType?: string[]
  totalInCart?: number
  inStock?: boolean
  imagesSrc?: string[]
  imagesUrl?: ImagesType[]
  productDescription?: string
  descriptions?: DescriptionType[]
  features?: string[]
}

export type { ProductType }
