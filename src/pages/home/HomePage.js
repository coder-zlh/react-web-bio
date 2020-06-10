import { connect } from 'react-redux'

import HomeComponent from 'components/home/HomeComponent';
import {testApi} from 'action/authencation'

export default connect((state)=>(
    {
        
    }
), 
    {
        testApi
    }
)(HomeComponent)
