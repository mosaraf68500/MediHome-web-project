import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.init";

const Admin_Login = () => {
  const UserProvider = new GoogleAuthProvider();

  const handleUserLoginWithGoogle = () => {
    signInWithPopup(auth, UserProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="bg-slate-200 py-10">
      <div className="lg:w-2/5 w-11/12 mx-auto py-10 bg-white rounded-xl shadow-lg">
        <div>
          <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        </div>

        <div className="px-10 space-y-3">
          <div>
            <label htmlFor="email" className="text-lg">
              Email:
            </label>{" "}
            <br />
            <input
              className="border w-full h-[40px] rounded-2xl px-5 bg-slate-100"
              type="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg">
              Password:
            </label>{" "}
            <br />
            <input
              className="border w-full h-[40px] rounded-2xl px-5 bg-slate-100"
              type="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>{" "}
          <br />
          <div>
            <button className="w-full h-[40px] bg-[#2563EB] text-white font-bold rounded-xl">
              Login
            </button>
          </div>
          <div className="text-center">
            <p>
              Don't have an account?
              <NavLink to="/user_register" className="text-primary">
                Register Now
              </NavLink>
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <button
              onClick={handleUserLoginWithGoogle}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              {" "}
              <FcGoogle />
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Login;
