import { connect } from 'react-redux';

import HotSellIndexComponent from 'components/hotSell/HotSellIndexComponent';

import { getCuList } from 'action/hotSell/index';


export default connect((state)=>({
    hotSellIndex: state.hotSellIndex
}),{
    getCuList
})(HotSellIndexComponent)