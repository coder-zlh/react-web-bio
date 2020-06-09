export const actions = {
    "SHOW_GO_TO_TOP": Symbol(),
    "HIDE_GO_TO_TOP": Symbol(),

    "START_GO_TO_TOP": Symbol(),
    "END_GO_TO_TOP": Symbol()
}

export function showGoToTop(){
    return{
        type: actions.SHOW_GO_TO_TOP
    }
}

export function hideGoToTop(){
    return{
        type: actions.HIDE_GO_TO_TOP
    }
}

export function startGoToTop(){
    return{
        type: actions.START_GO_TO_TOP
    }
}

export function endGoToTop(){
    return{
        type: actions.END_GO_TO_TOP
    }
}