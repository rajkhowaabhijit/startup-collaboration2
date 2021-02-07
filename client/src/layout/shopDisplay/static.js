import carouselImage1 from '../../assets/images/carousel/carousel1.jpg'
import carouselImage2 from '../../assets/images/carousel/carousel4.png'
import carouselImage3 from '../../assets/images/carousel/carousel3.png'

import productImage1 from '../../assets/images/products/product1.jpg'
import productImage2 from '../../assets/images/products/product2.jpg'
import productImage3 from '../../assets/images/products/product3.jpg'
import productImage4 from '../../assets/images/products/product4.png'



export const carousels = [
    { key: 'featuring-1', url: carouselImage1, },
    { key: 'featuring-2', url: carouselImage2, },
    { key: 'featuring-3', url: carouselImage3, },
    { key: 'featuring-4', url: carouselImage2, },
]

export const shops = [
    { key: 'featured-shop-1', name: 'Shop 1', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters', val:3,  },
    // { key: 'featured-shop-2', name: 'Shop 2', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters', },
    // { key: 'featured-shop-3', name: 'Shop 3', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',  },
    // { key: 'featured-shop-4', name: 'Shop 4', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters', },
]

export const products = [
    { key: 'featured-products-1', name: 'Product 1', rating: 4, price: '400.00', discounted: '379.00' , avatar: productImage2, },
    { key: 'featured-products-2', name: 'Product 2', rating: 4, price: '400.00', discounted: '379.00' , avatar: productImage1, },
    { key: 'featured-products-3', name: 'Product 3', rating: 4, price: '400.00', discounted: '379.00' , avatar: productImage2, },
    { key: 'featured-products-4', name: 'Product 4', rating: 4, price: '400.00', discounted: '379.00' , avatar: productImage1, },
]