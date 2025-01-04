import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user,Loading}=useContext(AuthContext)

    if(Loading){
       return <span className="loading loading-spinner justify-center text-success"></span>
    }
    if(user){
        return children;
    }
    return (

        <Navigate to="/user_login"></Navigate>
    );
};

export default PrivateRoute;