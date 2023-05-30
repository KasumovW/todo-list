import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
    return (
        <div className='h-[40px] rounded-[20px] flex bg-white px-[10px] border-solid border border-black/30 mt-[10px] mx-auto'>
            <span className='text-[22px] flex items-center'>
                <AiOutlineSearch />
            </span>
            <input
                spellCheck
                className='w-[75%] h-full ml-[5px] outline-none'
                placeholder='Search...'
                type='text'
            />
        </div>
    );
};

export default Search;
