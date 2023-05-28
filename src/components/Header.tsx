import Categories from './Categories';

const Header = () => {
    const date = new Date();
    const time =
        date.getHours() > 18
            ? 'evening'
            : date.getHours() < 18
            ? 'afternoon'
            : date.getHours() < 12
            ? 'morning'
            : '';

    return (
        <div className='pt-[50px]'>
            <div className='block gap-[20px] items-center'>
                <div className='w-[70px] h-[70px] rounded-[70px] bg-secondary flex justify-center items-center text-[36px] font-medium'>
                    K
                </div>
                <p className='text-[18px] font-medium leading-[20px] mt-[10px]'>Good {time}, Kass</p>
                <Categories />
            </div>
        </div>
    );
};

export default Header;
