import Navbar from '../Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';



const Main = () => {

    return (          
            <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;