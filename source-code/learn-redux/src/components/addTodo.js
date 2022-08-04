


import store from '../../store'

export class AddTodo {
    constructor(ele) {
        this.ele = ele
        this.value = 'no message';
        this.render()
    }

    render() {
        const addBtn = document.createElement('button')
        const input = document.createElement('input')
        this.ele.appendChild(input)
        this.ele.appendChild(addBtn)
        addBtn.textContent = 'add'
        input.addEventListener('change', (e) => {
            this.value = e.target.value;
        })
        addBtn.addEventListener('click', () => {
            store.dispatch({
                type: 'ADD',
                payload: {
                    id: Math.random(),
                    text: this.value
                }
            })
        })
    }
}