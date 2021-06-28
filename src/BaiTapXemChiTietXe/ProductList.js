import React, { Component } from 'react'
import ProductItem from './ProductItem';
export default class ProductList extends Component {
    mangSanPham = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
    ];
    state = {
        sanPhamChiTiet:{ id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }

    }

    render() {
        return (
            <div className ="container">
                <div className="row">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        )
    }
}
