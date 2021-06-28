import React from 'react'

export default function DatabindingF() {

    const title='nhơn đẹp trai';
    const renderImage = ()=>{
        return <img src="https://picsum.photos/200/200" alt="...."/>

    }
    return (
        <div>
            <p>tiêu đề : {title}</p>
            {renderImage()};
        </div>
    )
}
