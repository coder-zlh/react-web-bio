import React from 'react'
import {connect} from 'react-redux';
import { Switch, Redirect } from 'react-router-dom'

import LayoutTemplate from '../components/common/LayoutTemplate'
import Routers from './Routers';

function PrivateRouter(props) {
    if(props.authencation.logined){
        return(
            <LayoutTemplate>
                <Switch>
                    <Routers/>
                </Switch>
            </LayoutTemplate>
        )
    }else{
        return(
            <Redirect to="/login"></Redirect>
        )
    }
}

export default connect((state)=>(
    {
        authencation: state.authencation
    }
),
    {

    }
)(PrivateRouter)
