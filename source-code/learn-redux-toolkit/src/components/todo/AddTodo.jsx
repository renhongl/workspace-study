import React, { useCallback, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { add, fetchData } from './slice'

export default function AddTodo() {
    const dispatch = useDispatch()
    const inputRef = useRef()

    const onAdd = useCallback(
      () => {
        dispatch(add({
            id: Math.random(),
            text: inputRef.current.value
        }))
      },
      [],
    )

    const onLoad = useCallback(
        () => {
            dispatch(fetchData('some params'))
        },
        []
    )

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={onAdd}>Add</button>
            <button onClick={onLoad}>Load from api</button>
        </div>
    )
}
