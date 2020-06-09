export const actions = {
    TEST_API : Symbol(),
    TEST_API_SUCCESS : Symbol(),
    TEST_API_FAILED : Symbol(),
}

export function testApi(){
    return{
        types:  [ actions.TEST_API, actions.TEST_API_SUCCESS, actions.TEST_API_FAILED],
        promise: (client) => client.get('/api/tygUserList/229531')
    }
}