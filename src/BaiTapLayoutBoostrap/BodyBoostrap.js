import React, { Component } from 'react'
import Banner from './Banner';
import Item1 from './Item1';



export default class BodyBoostrap extends Component {
    render() {
        return (
            <div className="container">
               <div className="row"> <Banner /></div>
               <div className=""><Item1/></div>
               
            </div>
        )
    }
}
