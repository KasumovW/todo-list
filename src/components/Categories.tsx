import { useState } from 'react';
import { FcSportsMode, FcComboChart, FcHome, FcPuzzle } from 'react-icons/fc';

const Categories = () => {
    const [id, setId] = useState<null | number>(null);
    const category = [
        { id: 1, title: 'sport', icon: <FcSportsMode /> },
        { id: 2, title: 'work', icon: <FcComboChart /> },
        { id: 3, title: 'house', icon: <FcHome /> },
        { id: 4, title: 'things', icon: <FcPuzzle /> },
    ];

    return (
        <nav>
            <ul className='flex gap-[30px] mt-[20px] text-[18px] text-center'>
                {category.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setId((prev) => (prev === item.id ? null : item.id))}
                        className={`cursor-pointer w-[70px] h-[70px] rounded-full hover:bg-secondary/10 p-[10px] ${
                            id === item.id && 'bg-secondary/20'
                        }`}
                    >
                        <div className='flex justify-center text-[25px] text-fourth'>{item.icon}</div>
                        {item.title}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Categories;
