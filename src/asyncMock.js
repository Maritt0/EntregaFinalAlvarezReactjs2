const products =[
    {
        id: '1',
        name:'Iphone 12',
        price:1000,
        category:'celular',
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662129048246',
        stock:25,
        description:'Descripción del Iphone 12'
    },
    {
        id: '2',
        name:'Samsung S20',
        price:800,
        category:'celular',
        img:'https://samsungar.vtexassets.com/arquivos/ids/184272-1200-auto?width=1200&height=auto&aspect=true',
        stock:15,
        description:'Descripción del Samsung S20'
    },
    {
        id: '3',
        name:'Tablet Asus',
        price:1200,
        category:'tablet',
        img:'https://http2.mlstatic.com/D_NQ_NP_954421-MLA20781667790_062016-O.webp',
        stock:20,
        description:'Descripción de la tablet Asus'
    },
]

export const getProducts = () => 
{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}
