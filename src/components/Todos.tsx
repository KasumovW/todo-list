import Modal from './Modal';
import Todo from './Todo';
import { TodoType } from '../Types';
import { useId, useState } from 'react';
import todos from '../store/Todos';
import modals from '../store/Modals';
import { observer } from 'mobx-react-lite';
import EditTask from './EditTask';

const Todos = observer(() => {
    const id = useId();
    const [task, setTask] = useState({
        title: '',
        category: null,
    });

    const onSubmit = (e: any) => {
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

        return false;
    };

    return (
        <div>
            <h1 className='text-[22px] font-semibold leading-[26px] text-fourth mt-[15px] mb-[20px]'>
                Today’s tasks
            </h1>

            <div className='h-[600px] overflow-y-scroll'>
                {todos.todos.map((todo: TodoType) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </div>

            {modals.addModal && (
                <Modal close={() => modals.addModalOpen()}>
                    <EditTask type='add' state={task} setState={setTask} onSubmit={onSubmit} />
                </Modal>
            )}

            {modals.editModal && (
                <Modal close={() => modals.editModalOpen()}>
                    <EditTask type='edit' setState={setTask} state={task} onSubmit={onSubmit} />
                </Modal>
            )}
        </div>
    );
});

export default Todos;
