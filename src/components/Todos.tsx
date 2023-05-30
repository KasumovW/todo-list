import Modal from './Modal';
import Todo from './Todo';
import { TodoType } from '../Types';
import { useState } from 'react';
import todos from '../store/Todos';
import modals from '../store/Modals';
import { observer } from 'mobx-react-lite';
import EditTask from './EditTask';

const Todos = observer(() => {
    const id = new Date().toISOString();

    const [task, setTask] = useState({
        title: '',
        category: null,
    });

    const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        todos.addTodo({
            id: id,
            title: task.title,
            completed: false,
            category: task.category,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
            }),
        });
        modals.addModalOpen();
        setTask({ title: '', category: null });
        return false;
    };

    const editTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        todos.editTodo(
            task.title,
            new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
            })
        );
        setTask({ title: '', category: null });
        modals.editModalOpen();

        return false;
    };

    const renderTodos = () => {
        return (
            <div className='h-[600px] overflow-y-scroll'>
                {!todos.todos.length && (
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-center text-[24px] font-medium mt-[50px] mb-[10px]'>
                            You don't have any tasks, do you want to add?
                        </h1>
                        <button
                            onClick={() => modals.addModalOpen()}
                            className='w-[140px] h-[40px] border-solid border border-black/30 block rounded-[10px] hover:bg-black/5'
                        >
                            Add task
                        </button>
                    </div>
                )}
                {todos.todos.map((todo: TodoType) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1 className='text-[22px] font-semibold leading-[26px] text-fourth mt-[15px] mb-[20px]'>
                Today’s tasks
            </h1>

            {renderTodos()}

            {modals.addModal && (
                <Modal close={() => modals.addModalOpen()}>
                    <EditTask type='add' state={task} setState={setTask} onSubmit={addTask} />
                </Modal>
            )}

            {modals.editModal && (
                <Modal close={() => modals.editModalOpen()}>
                    <EditTask type='edit' setState={setTask} state={task} onSubmit={editTask} />
                </Modal>
            )}
        </div>
    );
});

export default Todos;
