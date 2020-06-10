const actions = {
    GET_CU_LIST: Symbol(),
    GET_CU_LIST_SUCCESS: Symbol(),
    GET_CU_LIST_FAILED: Symbol(),
}

export function getCuList(){
    const params={
        isFiltered: false,
        page: 1,
        provinceId: "11",
        schoolName: "",
        size: 15,
    }
    return{
        types:[actions.GET_CU_LIST,actions.GET_CU_LIST_SUCCESS,actions.GET_CU_LIST_FAILED],
        promise: client => client.post('/api/cu_school/list',params)
    }
}