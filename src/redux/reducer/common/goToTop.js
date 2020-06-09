import { actions as a } from 'action/common/goToTop';

const initState = {
    show: false,
    back: false
}

export default function reducer(state = initState, action){
    switch(action.type){
        case a.SHOW_GO_TO_TOP:
            return{
                ...state,
                show: true
            }
        case a.HIDE_GO_TO_TOP:
            return{
                ...state,
                show: false
            }
        case a.START_GO_TO_TOP:
            return{
                ...state,
                back: true
            }
        case a.END_GO_TO_TOP:
            return{
                ...state,
                back: false
            }
        default:
            return state;
    }
}