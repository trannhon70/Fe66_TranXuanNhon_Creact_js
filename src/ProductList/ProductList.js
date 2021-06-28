import React, { Component } from 'react'
import ProductItems from './ProductItems';

export default class ProductList extends Component {
    
    renderProduct=() => {
        //lấy giá trị từ component app truyền vào thông qua props
        let arrProduct=this.props.arrProduct;
        return arrProduct.map((item,index)=>{
            return <div className="col-4 mt-2" key={index}>
                <ProductItems product={item}/>
            </div>
        })
    }
    render() {
        return (
            <div className="container-fluid" style={{ height: '100vh' }}>
                <div className="row">
                    <div style={{ minHeigh: '100vh' }} className=" col-4 nav flex-column nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shop</a>
                        
                    </div>
                
                
                    <div className=" col-8 tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h3 className="text-center">Shoes Shop</h3>
                            <div className="row">
                                {this.renderProduct()}
                                {/* <div className="col-4">
                                    <ProductItems/>
                                </div>
                                <div className="col-4">
                                    <ProductItems/>
                                </div>
                                <div className="col-4">
                                    <ProductItems/>
                                </div> */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Shop</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
