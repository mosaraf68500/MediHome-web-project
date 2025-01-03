import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import User_Login from './components/User_Login/User_Login.jsx';
import User_Register from './components/User_Register/User_Register.jsx';
import Admin_Login from './components/Admin_Login/Admin_Login.jsx';
import Doctor_Login from './components/Doctor_Login/Doctor_Login.jsx';
import Appointment from './components/Appointment/Appointment.jsx';
import Doctors from './components/Doctors/Doctors.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,

    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"appointment",
        element:<Appointment></Appointment>

      },

      {
        path:"doctors",
        element:<Doctors></Doctors>

      },

      {
        path:"user_login",
        element:<User_Login></User_Login>,

      },

      {
        path:"user_register",
        element:<User_Register></User_Register>,
      },

      {
        path:"admin_login",
        element:<Admin_Login></Admin_Login>,
      },

      {
        path:"doctor_login",

        element:<Doctor_Login></Doctor_Login>
      }
    ]
  },

 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>

  </StrictMode>,
)
