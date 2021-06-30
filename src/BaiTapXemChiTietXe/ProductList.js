import React, { Component } from 'react'
import ProductItem from './ProductItem';
export default class ProductList extends Component {
    mangSanPham = [
        { id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 }
    ];
    state = {
        sanPhamChiTiet:{ id: 4, name: 'Steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 }

    }
    xemChiTiet = (sanPhamDuocClick)=>{
        console.log('sanPhamDuocClick',sanPhamDuocClick);
        this.setState({
            sanPhamChiTiet:sanPhamDuocClick
        })
    }
    renderSanPham=()=>{
        return this.mangSanPham.map((sanPham,index)=>{
            return <div className="col-3" key={index}>
                <ProductItem sp={sanPham} xemChiTiet={this.xemChiTiet}/>
                
            </div>
        })
    }
    render() {
        let {sanPhamChiTiet}=this.state;
        return (
            <div className ="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div>
                    {/* Button trigger modal */}
                    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
                    </button> */}
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{sanPhamChiTiet.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                   <img src={sanPhamChiTiet.img} height={200} width={465} alt="..."/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
