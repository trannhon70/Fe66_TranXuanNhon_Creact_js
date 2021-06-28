import { thisExpression } from '@babel/types'
import React, { Component } from 'react'
import { Style } from './BaiTapChonKinh.modole.css'

export default class BaiTapChonKinh extends Component {

    state = {
        imgSrc: "./img/glasses/v1.png",
        name: "GUCCI G8850U",
        desc:'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
    }

    handleChangeColor=(color,name)=>{
            this.setState({
                imgSrc: `./img/glasses/${color}.png`,
                name:`${name}`,
            })
    }
    // "name": "GUCCI G8850U",
    //"desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    

    // handleChangeText=(text)=>{
    //     this.setState({
    //         name:`${text} G8850U`,
    //         // desc:`Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.`
    //     })
    // }
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: `url("./img/glasses/background.jpg")` }} >
                {/* <img className=" " src="./img/glasses/background.jpg" alt="..." /> */}
                <div className="row">
                    <div className="col-12 backgroundColor text-white text-center display-4">
                        TRY GLASSES APP ONLINE
                    </div>
                </div>
                <div className="row pt-4 pb-4 ">
                    <div className="col-6 text-right position-relative ">
                        <img className="w-90 height pr-4" src="./img/glasses/model.jpg" alt="..." />
                        <img className="position-absolute kinh" src={this.state.imgSrc} alt="..." />
                        <div className="position-absolute text text-left pl-3 pt-2 pb-2">
                            <p className="text-info font-weight-bold mb-0">{this.state.name}</p>
                            <span className="">{this.state.desc}</span>
                        </div>
                    </div>
                    
                    <div className="col-6">
                        <img className="w-90 height pl-4" src="./img/glasses/model.jpg" alt="..." />
                    </div>
                    
                </div>
                <div className="row padding  ">
                    <div className="col-12 pb-3 pt-5">
                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v1.png" alt="..." onClick={()=> {this.handleChangeColor('v1','GUCCI G8850U')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v2.png" alt="..." onClick={()=> {this.handleChangeColor('v2','GUCCI G8759H')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v3.png" alt="..." onClick={()=> {this.handleChangeColor('v3','DIOR D6700HQ')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v4.png" alt="..." onClick={()=> {this.handleChangeColor('v4','DIOR D6005U')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v5.png" alt="..." onClick={()=> {this.handleChangeColor('v5','PRADA P8750')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v6.png" alt="..." onClick={()=> {this.handleChangeColor('v6','PRADA P9700')}} />
                    </div>
                    <div className="col-12 pb-4">
                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v7.png" alt="..." onClick={()=> {this.handleChangeColor('v7','FENDI F8750')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v8.png" alt="..." onClick={()=> {this.handleChangeColor('v8','FENDI F8500')}} />

                        <img className="col-2 border maxKinh  "style={{cursor: "pointer"}} src="./img/glasses/v9.png" alt="..." onClick={()=> {this.handleChangeColor('v9','FENDI F4300')}} />
                    </div>
                </div>
            </div>
        )
    }
}
