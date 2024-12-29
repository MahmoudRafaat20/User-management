import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UsersList = () => {
    let [UserId, setUserId] = useState(0)
    let [UserData, setUserData] = useState({})
    let [Users, setusers] = useState([])
    const [show, setShow] = useState(false);
    let navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = (user) => {
        setShow(true);
        setUserId(user.id)
        setUserData(user)
    }
    let getUsers = async () => {
        try {
            let response = await axios.get("https://dummyjson.com/users")
            setusers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    };

    let deleteUsers = () => {
        try {
            let response = axios.delete(`https://dummyjson.com/users/${UserId}`)
            handleClose()
            toast.success("Deleted Successfully")
        } catch (error) {
            console.log(error);
            toast.error("Deleted failed ")
        }
    }
    let navigateToAddUser = () => {
        navigate("/dashboard/users-data")
    }
    let navigateToUpdateUser = (User:any) => {
        navigate("/dashboard/users-data", {state:{User,isUpdate:true}})
    }
    useEffect(() => {
        getUsers()
    },[])

    return (
        <div>
            <div className="d-flex justify-content-between mx-3">
                <h3>UsersList</h3>
                <button onClick={navigateToAddUser} className="btn btn-warning text-white">Add User</button>
            </div>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>BirthDate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {Users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><img src={user.image} className="w-25" /></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.birthDate}</td>
                            <td><CiEdit className="text-warning" size={30} onClick={()=>navigateToUpdateUser(user)}/> <MdDelete onClick={() => handleShow(user)} className="text-warning mx-1" size={30} /></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm deleting {UserData.firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {UserData.firstName} {UserData.lastName}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => deleteUsers()}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UsersList;
