


import store from '../store'

export class TodoList {
    constructor(ele) {
        this.ele = ele
        const state = store.getState();
        this.render(state);
        store.subscribe(() => {
            const state = store.getState();
            this.render(state);
        })
    }

    render(state) {
        this.ele.innerHTML = `
            <div>TODO</div>
        `
        const list = state.todoList;
        list.forEach(item => {
            this.ele.innerHTML += `<div>${item.text}</div>`
        })
    }
}