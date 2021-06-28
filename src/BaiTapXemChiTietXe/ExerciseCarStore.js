import React, { Component } from 'react'
import Modal from './Modal';
import ProductList from './ProductList';

export default class ExerciseCarStore extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Modal/>
                </div>
                <div className="row">
                    <ProductList/>
                </div>
            </div>
        )
    }
}
