import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome, FaUsers } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import profile from "../../assets/Profile.jpeg"

const SideBar = () => {
    let[collapsed,setcollapse]=useState(false)
    let toggleCollapse=()=>{
        setcollapse(!collapsed)
    }
    return (
        <div className="sidebar-container vh-100 ">
            <Sidebar collapsed={collapsed} className='vh-100'>
                {collapsed? <FaArrowAltCircleRight onClick={toggleCollapse} className='mx-2' size={25}/>: <FaArrowAltCircleLeft onClick={toggleCollapse} className='mx-2' size={25}/>}
                <div className='text-center my-5'>
                    <img src={profile} width={100} className='rounded '/>
                    <h5>Mahmoud Rafaat</h5>
                    <h5 className='text-warning'>Admin</h5>
                </div>
                <Menu>
                    <MenuItem icon={<FaHome />} component={<Link to="/dashboard" />}> Home</MenuItem>
                    <MenuItem icon={<FaUsers/> } component={<Link to="/dashboard/users-list" />}>Users</MenuItem>
                    <MenuItem icon={<HiUserAdd/>} component={<Link to="/dashboard/add-user" />}>Add users</MenuItem>
                    <MenuItem icon={<CgProfile/> } component={<Link to="/dashboard/profile" />}>Profile</MenuItem>
                    <MenuItem icon={<CiLogout/> } component={<Link to=""/>}>Log out</MenuItem>
                </Menu>
            </Sidebar>;
        </div>
    );
};

export default SideBar;