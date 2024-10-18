type DescriptionType = {
  title: string,
  description?: string,
  imgaesUrl?: string, 
}

type ProductType = {
  id:  number;
  name: string;
  price: number;
  totalInCart: number,
  productType: string,
  imagesUrl?: string[] | string,
  productDescription?: string,
  autoType?: string[] | string, 
  features?: string[],
  descriptions?: DescriptionType[],
}

export type { ProductType }