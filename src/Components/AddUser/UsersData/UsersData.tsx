import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddUser = () => {

    let { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    let { state } = useLocation();
    let { User, isUpdate } = state || {}
    let onSubmit = async () => {
        try {
            let response = await axios.post("https://dummyjson.com/users/add", data)
            console.log(response);
            toast.success("added successfully")
            navigate("/dashboard/users-list")

        } catch (error) {
            console.log(error);
            toast.error("failed to add")
        }
    }

    let UpdateUsers = () =>{
        try {
            let response = axios.put(`https://dummyjson.com/users/${User.id}`)
            setData(response?.data?.users)
            toast.success("updated successfully")
        } catch (error) {
            console.log(error)
            toast.error("failed to update")
        }
    }
    useEffect(() => {
        if (User && isUpdate) {
            setValue("firstName", User.firstName)
            setValue("lastName", User.lastName)
            setValue("email", User.email)
            setValue("phone", User.phone)
            setValue("age", User.age)
            setValue("birthDate", User.birthDate)
        }
        if (!isUpdate) {
            setValue("firstName", "")
            setValue("lastName", "")
            setValue("email", "")
            setValue("phone", "")
            setValue("age", "")
            setValue("birthDate", "")
        }
    }, [isUpdate, User])
    return (
        <>
            <div className="mx-3">
                <h3>{isUpdate ? "Update user" : "Add user"}</h3>
            </div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-3 m-5 rounded">
                <div className="row">
                    <div className="col-md-6">
                        <label> First Name </label>
                        <input type="text" className="form-control my-2" placeholder="Enter your First Name" {...register("firstName", { required: "First Name is required" })} />
                        {errors.firstName && <span className="text-danger">{errors.firstName.message} </span>}
                    </div>
                    <div className="col-md-6">
                        <label>Last Name</label>
                        <input type="text" className="form-control my-2" placeholder="Enter your Last Name" {...register("lastName", { required: "lastName is required" })} />
                        {errors.lastName && <span className="text-danger">{errors.lastName.message} </span>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control my-2" placeholder="Enter your Email" {...register("email", { required: "email is required" })} />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>
                    <div className="col-md-6">
                        <label>Age</label>
                        <input type="number" className="form-control my-2" placeholder="Enter your Age" {...register("age", { required: "age is required" })} />
                        {errors.age && <span className="text-danger">{errors.age.message}</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Phone Number</label>
                        <input type="number" className="form-control my-2" placeholder="Enter your Phone Number" {...register("phone", { required: "phone is required" })} />
                        {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                    </div>
                    <div className="col-md-6">
                        <label>Birth Date</label>
                        <input type="date" className="form-control my-2" placeholder="Enter your Birth Date" {...register("birthDate", { required: "birthDate is required" })} />
                        {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
                    </div>
                </div>
                <div className="text-center my-5">
                    <button className="btn btn-warning w-25 text-white">{isUpdate? "Save Updates": "Save"}</button>
                </div>
            </form>
        </>
    );
};

export default AddUser;