


export function testReducer(state = {
    value: 0
}, action) {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}