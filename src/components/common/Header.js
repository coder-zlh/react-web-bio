import 'styles/common/header.scss';

import React from 'react'

export default function Header(props) {
    return (
        <div className="header">
            <span onClick={()=>{history.go(-1)}}>&lt;</span>
            <span style={{textAlign: 'center'}}>{props.title}</span>
        </div>
    )
}
