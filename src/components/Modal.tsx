type Props = {
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/ban-types
    close: Function;
};

const Modal = ({ children, close }: Props) => {
    return (
        <div
            onClick={() => close()}
            className='fixed top-0 left-0 bg-black/50 w-screen h-screen flex justify-center items-center'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='w-[320px] bg-primary rounded-[15px] p-[10px]'
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
