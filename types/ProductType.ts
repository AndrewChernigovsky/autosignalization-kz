import type { ImagesType } from '@/types/ImagesType'

type DescriptionType = {
  title: string
  description?: string
  imageUrl?: ImagesType[]
}

type ProductType = {
  id: number
  title?: string
  name?: string
  price?: number
  totalInCart?: number
  productType?: string
  inStock?: boolean
  quantity?: number
  imagesUrl?: ImagesType[] | string
  productDescription?: string
  autoType?: string[]
  features?: string[]
  descriptions?: DescriptionType[]
}

export type { ProductType }
