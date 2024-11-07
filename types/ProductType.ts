import type { ImagesType } from '@/types/ImagesType'

type DescriptionType = {
  title?: string
  description: string
  imageUrl: ImagesType[]
}

type ProductType = {
  id: number
  title: string
  price: number
  category: string
  totalInCart?: number
  productType?: string
  inStock?: boolean
  quantity: number
  imagesUrl?: ImagesType[]
  productDescription?: string
  autoType?: string[]
  features?: string[]
  descriptions?: DescriptionType[]
}

export type { ProductType }
