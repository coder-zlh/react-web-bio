import React,{ useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';
import Popup from '../common/Popup';

export const MyIndexComponent = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <React.Fragment>
            <div><Link to="/my/rpwd">修改密码</Link></div>
            <button onClick={()=>{setShowPopup(true)}}>show</button>
            {/* <CSSTransition in={showPopup} timeout={500} classNames="star"> */}
                <Popup isShow={showPopup} onClose={()=>{setShowPopup(false)}}>
                    <div style={{width:200,height:200,backgroundColor: 'white',position: 'absolute',left: "50%",top: '50%',marginLeft: -100,marginTop: -100}}>hello world</div>
                </Popup>
            {/* </CSSTransition> */}
        </React.Fragment>
    )
}

export default MyIndexComponent
