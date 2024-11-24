import type { ImagesType } from '@/types/ImagesType'

type ServiceType = {
  id: number
  title: string
  price: number
  images?: ImagesType[]
  description?: string
  serviceDesciption?: string[]
}

export type { ServiceType }
