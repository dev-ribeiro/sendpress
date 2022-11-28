export interface IProduct {
    id: string
    title: string
    price: number
    categories: string
    miniature: string
    imagesPath: string[]
    amountSelected: number
    isCheckoutCart: boolean
    slug: string
    description: string
}
