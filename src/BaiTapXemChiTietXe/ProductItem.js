import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {sp}=this.props;
        return (
            <div className="border">
               <div className="card bg-white text-dark">
                    <img src={sp.img} alt="..."/>
                </div>
                <div className="card-body">
                    <p className="font-weight-bold">{sp.name}</p>
                    <p>{sp.price}</p>
                    <button onClick={() => {
                        //Định nghĩa sự kiện click trên mỗi sản phẩm
                        this.props.xemChiTiet(sp);
                       
                    }} type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#modelId">
                        xem chi tiết
                    </button>
                </div>

            </div>
        )
    }
}
