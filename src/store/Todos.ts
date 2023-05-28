import { makeAutoObservable } from 'mobx';
import { TodoType } from '../Types';

class TodoList {
    todos: TodoType[] = [
        { id: 1, title: 'Make a lot of maney for my family', completed: false, category: 1, time: '09:30' },
        { id: 2, title: 'Hard work', completed: true, category: 2, time: '11:11' },
        { id: 3, title: 'Do training', completed: true, category: 3, time: '12:32' },
        { id: 4, title: 'All things', completed: false, category: 4, time: '16:28' },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: any) {
        this.todos = [todo, ...this.todos];
        console.log('Add todo');
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    toggleTodo(id: number) {
        const todoIndex = this.todos.findIndex((todo) => todo.id == id);
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    }

    editTodo(id: number, todo: any) {
        const todoIndex = this.todos.findIndex((todo) => todo.id == id);
        this.todos[todoIndex] = todo;
    }
}

export default new TodoList();
