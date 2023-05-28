import { BsFillHouseFill } from 'react-icons/bs';
import modals from '../store/Modals';

const NavBar = () => {
    return (
        <div className='max-w-[720px] mx-auto h-[50px] fixed -bottom-[20px] right-0 left-0 w-full z-50 rounded-[30px] bg-[#EDEAEA] drop-shadow-[0_-1px_2px_rgba(34,60,80,0.25)]'>
            <div
                onClick={() => modals.addModalOpen()}
                className='bg-secondary w-[50px] h-[50px] rounded-full flex justify-center items-center text-[26px] relative -top-[20px] mx-auto left-0 right-0 text-white cursor-pointer'
            >
                +
            </div>

            <div>
                <BsFillHouseFill />
            </div>
        </div>
    );
};

export default NavBar;
