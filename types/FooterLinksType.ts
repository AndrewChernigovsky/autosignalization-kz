type SubLinksType = {
    title: string,
    path: string,
}

type LinksType = {
    title: string,
    path: string,
    subLinks?: SubLinksType[]
}

  export type  { LinksType }
