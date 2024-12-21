import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <IoArrowBackCircleOutline />
                </div>
                <div className="input-group m-3 w-25 ">
                    <input  className="form-control " placeholder="Search" />
                    <button className="btn btn-warning rounded" type="button"><IoSearch /></button>
                    <FaRegBell className="mx-3 my-2"/>
                </div>
            </div>
        </div>
    );
};
export default Navbar;