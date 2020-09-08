import React,{ useState } from 'react';

import { Link } from 'react-router-dom';
import Popup from '../common/Popup';
import LoadMore from '../common/LoadMore';
import TabBar from 'components/common/TabBar';
import TransitionRouteWrapper from 'components/common/TransitionRouteWrapper';

export const MyIndexComponent = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className="my container scroll-container-style-1">
            <LoadMore isLoadEnd={false} isLoading={true} isFreshed={true} isFreshing={false}>
                <div style={{height: 70}}><Link to="/resetpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                <div style={{height: 70}}><Link to="/my/rpwd">修改密码</Link></div>
                {/* <button onClick={()=>{setShowPopup(true)}}>show</button> */}
            </LoadMore>
            <TabBar/>
            <Popup isShow={showPopup} onClose={()=>{setShowPopup(false)}}>
                <div style={{width:200,height:200,backgroundColor: 'white',position: 'absolute',left: "50%",top: '50%',marginLeft: -100,marginTop: -100}}>hello world</div>
            </Popup>
        </div>
    )
}

export default TransitionRouteWrapper(MyIndexComponent)
