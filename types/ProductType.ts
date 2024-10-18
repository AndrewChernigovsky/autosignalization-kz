import type { ImagesType } from "@/types/ImagesType";

type DescriptionType = {
  title: string,
  description?: string,
  imageUrl?: ImagesType[], 
}

type ProductType = {
<<<<<<< HEAD
  id:  number;
  name: string;
  price: number;
  totalInCart: number,
  productType: string,
  inStock: boolean,
  imagesUrl?: ImagesType[] | string,
  productDescription?: string,
  autoType?: string[] | string, 
  features?: string[],
  descriptions?: DescriptionType[],
=======
  id: number
  price: number
  name: string
  image?: {
    src: string
    alt: string
  }
  quantity: number
>>>>>>> bb43eaa4fcd2bf56e860919b1e35a26de08d6514
}

export type { ProductType }
