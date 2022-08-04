import React, { useRef, useCallback  } from 'react'
import { useDispatch } from 'react-redux'

export function AddTodo() {
    const inputRef = useRef()
    const dispatch = useDispatch();

    const addTodo = useCallback(
      () => {
        const value = inputRef.current.value
        dispatch({
            type: 'ADD',
            payload: {
                id: Math.random(),
                text: value
            }
        })
      },
      [],
    )

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}
