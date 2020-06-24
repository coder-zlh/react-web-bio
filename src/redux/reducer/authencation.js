import { actions as t } from 'action/authencation';

const initState={
    data: null,
    logined: true
}

export default function reducer( state = initState, action ){
    switch(action.type){
        case t.TEST_API_SUCCESS:
            return{
                ...state,
                data: action.result.data.data
            }
        default:
            return {
                ...state
            }
    }
}