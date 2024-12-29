
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import AuthLayout from './Components/AuthLayout/AuthLayout'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import UsersList from './Components/UsersList/UsersList'
import UsersData from './Components/UsersData/UsersData'
import Profile from './Components/Profile/Profile'
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  let routes = createBrowserRouter([{
    path: "",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
    ]
  }, {
    path: "/dashboard",
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children:[
      { index: true, element: <Home/>},
      { path:"home", element:<Home/>},
      { path:"users-list", element:<UsersList/> },
      { path:"users-data", element:<UsersData/> },
      { path:"profile", element:<Profile/> },
    ]
  }
])

  return (
    <>
    <ToastContainer/>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
