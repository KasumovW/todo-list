type Props = {
    type: 'edit' | 'add';
    state: any;
    setState: any;
    onSubmit: any;
};

const EditTask = ({ state, setState, onSubmit, type }: Props) => {
    const changeTask = (key: string, value: string) => {
        setState({ ...state, [key]: value });
    };

    return (
        <div className='h-[150px] relative'>
            <h1 className='text-center text-[18px] font-medium mb-[10px]'>
                {type === 'add' ? 'Add new task' : 'Edit task'}
            </h1>
            <form className='flex mx-auto' onSubmit={onSubmit}>
                <label className='w-2/3'>
                    <p className='text-[14px]'>Title</p>
                    <input
                        onChange={(e) => changeTask('title', e.target.value)}
                        value={state.title}
                        className='bg-white w-full border-solid border border-black/30 h-[30px] text-[18px] outline-none rounded-l-[5px] pl-[5px]'
                        type='text'
                        placeholder='Задача...'
                    />
                </label>
                <label className='w-1/3'>
                    <p className='text-[14px]'>Category</p>
                    <select
                        onChange={(e) => changeTask('category', e.target.value)}
                        className='block h-[30px] bg-white border-solid w-full border border-black/30 text-center rounded-r-[5px] outline-none'
                    >
                        <option value='null'>-------</option>
                        <option className='text-[18px]' value='1'>
                            sport
                        </option>
                        <option className='text-[18px]' value='2'>
                            work
                        </option>
                        <option className='text-[18px]' value='3'>
                            house
                        </option>
                        <option className='text-[18px]' value='4'>
                            things
                        </option>
                    </select>
                </label>

                <button
                    disabled={!state.title || !state.category}
                    className='absolute bottom-[10px] left-0 right-0 mx-auto border-solid border border-black/30 w-[150px] h-[40px] rounded-[20px] disabled:cursor-not-allowed disabled:bg-gray-950/5'
                    type='submit'
                >
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default EditTask;
