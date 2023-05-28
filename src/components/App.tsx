import Header from './Header';
import NavBar from './NavBar';
import Search from './Search';
import Todos from './Todos';

const App = () => {
    return (
        <div className='max-w-[720px] m-auto px-[15px] bg-primary rounded-[30px]'>
            <Header />
            <Search />
            <Todos />
            <NavBar />
        </div>
    );
};

export default App;

