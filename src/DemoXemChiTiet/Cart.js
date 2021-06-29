import React, { Component } from 'react'

export default class Cart extends Component {
    renderGioHang = () => {
        //lấy ra hàm xóa từ component DemoXemChiTiet
        let { xoaGioHang } = this.props;
        //Nhận giá trị giỏ hàng từ component demoXemChiTiet
        let { gioHang } = this.props;
        return gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} with={50} height={50} /></td>
                <td>{spGH.giaBan.toLocaleString()}</td>

                <td>
                    <button className="btn btn-primary mr-2" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}>-</button>
                </td>

                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button onClick={() => {
                    //this.props.xoaGioHang(spGH.maSP);
                    xoaGioHang(spGH.maSP)
                }} class="btn btn-danger">Xóa</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
                    </button> */}
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table ">
                                        <thead>
                                            <tr className="cart">
                                                <th>Mã sản phẩm </th>
                                                <th>Tên sản phẩm </th>
                                                <th>Hình ảnh </th>
                                                <th>Đơn giá </th>
                                                <th>Số Lượng</th>
                                                <th>Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderGioHang()}
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Iphone</td>
                                                <td><img src="https://picsum/photos/id.99//50/50" alt="..." /></td>
                                                <td>1.000</td>
                                                <td>2</td>
                                                <td>2.000</td>
                                                <td><button class="btn btn-primary">Xóa</button></td>
                                            </tr> */}

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5"></td>
                                                <td>tổng tiền </td>
                                                <td>{this.props.gioHang.reduce((tongTien, spGH, index) => { return tongTien += spGH.soLuong * spGH.giaBan; }, 0).toLocaleString()}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
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
