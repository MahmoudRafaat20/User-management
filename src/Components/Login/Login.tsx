import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

   let {register,handleSubmit,formState:{errors}}= useForm()
   let navigate=useNavigate()

   let onSubmit=async(data)=>{
   try {
     let response= await axios.post('https://dummyjson.com/auth/login',data)
     console.log(response);
     toast.success("log in successfully")
     navigate("/dashboard")
   } catch (error) {
    console.log(error);
    toast.error("login failed")
   }
   }

    return (
        <div className="container-fluid  login-container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-4">
                    <div className="bg-white rounded p-4 ">
                        <div className="title text-center">
                            <h3>User Management System</h3>
                            <h4 className="my-3">Sign in</h4>
                            <small>Enter your crendentials to access your account</small>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-details my-3 ">
                                <div>
                                    <label>Username</label>
                                    <input type="text" className="form-control my-2" placeholder="Enter your Email" {...register("username",{required:"Username is required"})}/>
                                    {errors.username &&<span className="text-danger">{errors.username.message}</span>}
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="Password" className="form-control my-2" placeholder="Enter your Password" {...register("password",{required:"Password is required"})}/>
                                    {errors.password &&<span className="text-danger">{errors.password.message}</span>}
                                </div>
                            </div>
                            <button className="btn btn-warning text-light w-100 my-4">Sign in</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;