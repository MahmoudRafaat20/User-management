
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';

const MasterLayout = () => {
    return (
        
           <div className='d-flex'>
              <div ><SideBar/></div>
              <div className='w-100'>
                <Navbar/>
                <Outlet/>
              </div>
           </div>

       
    );
};

export default MasterLayout;