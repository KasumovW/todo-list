import { MdEditNote } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { TodoType } from '../Types';
import todos from '../store/Todos';
import modals from '../store/Modals';

const Todo = ({ id, title, completed, time }: TodoType) => {
    return (
        <>
            <div className='h-[75px] rounded-[20px] border-solid border-[2px] border-[#D6D6D6] flex justify-between items-center p-[10px] mb-[20px]'>
                <input
                    onClick={() => todos.toggleTodo(id)}
                    className='w-[20px] h-[20px]'
                    type='checkbox'
                    checked={completed}
                />
                <div className='w-[80%] text-black/50'>
                    <p>{time}</p>
                    <p className={completed ? 'line-through' : ''}>{title}</p>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <div onClick={() => modals.editModalOpen()} className='text-[26px] cursor-pointer'>
                        <MdEditNote fill='#DFBD43' />
                    </div>
                    <div onClick={() => todos.removeTodo(id)} className='text-[16px] ml-[2px] cursor-pointer'>
                        <FaTrash fill='#DFBD43' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;