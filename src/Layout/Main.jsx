import { Outlet } from 'react-router-dom';
import NevBar from '../Shared/NevBar/NevBar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    
    return (
        <div>
            <NevBar>
                
            </NevBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;