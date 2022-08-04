

const initState = {
    todoList: [
        {
            id: 0,
            text: 'some text'
        }
    ]
}

export function todoReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return {
                ...state
            }
    }
}