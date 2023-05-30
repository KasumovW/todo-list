import { makeAutoObservable } from 'mobx';
import { TodoType } from '../Types';
import Cookies from 'js-cookie';

const todoList = Cookies.get('todos') ? JSON.parse(Cookies.get('todos')!) : null;

class TodoList {
    editTaskId: null | number = null;
    todos: TodoType[] = todoList || [
        { id: 1, title: 'Make a lot of maney for my family', completed: false, category: 1, time: '09:30' },
        { id: 2, title: 'Hard work', completed: true, category: 2, time: '11:11' },
        { id: 3, title: 'Do training', completed: true, category: 3, time: '12:32' },
        { id: 4, title: 'All things', completed: false, category: 4, time: '16:28' },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: TodoType | any) {
        this.todos = [todo, ...this.todos];
        Cookies.set('todos', JSON.stringify(this.todos));
        console.log('Task changed');
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        Cookies.set('todos', JSON.stringify(this.todos));
        console.log('Task removed');
    }

    toggleTodo(id: number) {
        const todoIndex = this.todos.findIndex((todo) => todo.id == id);
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
        Cookies.set('todos', JSON.stringify(this.todos));
        console.log('Task chenged');
    }

    editTodo(title: string, time: string) {
        const todoIndex = this.todos.findIndex((todo) => todo.id == this.editTaskId);
        this.todos[todoIndex].title = title;
        this.todos[todoIndex].time = time;
        Cookies.set('todos', JSON.stringify(this.todos));
        console.log('Task chenged');
    }

    saveEditTaskId(id: number) {
        this.editTaskId = id;
        console.log('Task id saved');
    }
}

export default new TodoList();
