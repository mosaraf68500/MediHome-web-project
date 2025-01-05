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
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AddDoctors from './components/AddDoctors/AddDoctors.jsx';
import Add from './components/Add/Add.jsx';
import AboutHospital from './components/AboutHospital/AboutHospital.jsx';
import ReadMorebtn from './components/ReadMorebtn/ReadMorebtn.jsx';
import LatestNews from './components/LatestNews/LatestNews.jsx';
import MoreLatestNews from './components/MoreLatestNews/MoreLatestNews.jsx';
import AskQuestion from './components/AskQuestion/AskQuestion.jsx';
import Contact from './components/Contact/Contact.jsx';


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
        element:<PrivateRoute><Appointment></Appointment></PrivateRoute>

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
      },
      {
        path:"add_doctors",
        element:<AddDoctors></AddDoctors>,
      },

      {
        path:"add",
        element:<Add></Add>
      },

      {
        path:"hospital",
        element:<AboutHospital></AboutHospital>,
      },

      {
        path:"readmorebtn",
        element:<ReadMorebtn></ReadMorebtn>
      },
      {
        path:'latest_news',
        element:<LatestNews></LatestNews>
      },

      {
        path:'morelatestnews',
        element:<MoreLatestNews></MoreLatestNews>,
      },

      {
        path:"askqusetion",
        element:<AskQuestion></AskQuestion>
      },
      {
        path:"contact",
        element:<Contact></Contact>
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
