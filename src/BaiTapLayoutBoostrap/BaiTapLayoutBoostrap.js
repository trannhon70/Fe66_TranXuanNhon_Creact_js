import React, { Component } from 'react'
import BTHeader from './BTHeader';
import BodyBoostrap from './BodyBoostrap';
import Banner from './Banner';
import FooterBoostrp from './FooterBoostrp';

export default class BaiTapLayoutBoostrap extends Component {
    render() {
        return (
            <div className="container-fluid">
               <BTHeader/>
               
               <div className="row"> <BodyBoostrap /></div>
               <div className="row">
                   <div className="col-12"><FooterBoostrp/></div>
               </div>
            </div>
        )
    }
}
