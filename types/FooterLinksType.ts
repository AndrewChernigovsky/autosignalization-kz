
type SubLinksType = {
    title: string,
    path: string,
}

type LinksType = {
    title: string,
    path: string,
    subLinks?: SubLinksType[]
}


type FooterLinksType = {
    title: string,
    path: string,
    subLinks?: LinksType[],
  }
  
  export type  { FooterLinksType }
