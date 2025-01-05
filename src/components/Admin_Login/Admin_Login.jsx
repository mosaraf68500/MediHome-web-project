import { Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { auth } from "../../firebase.init";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Admin_Login = () => {
  const { signInUser, signOutUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [redirectToNamePage, setRedirectToNamePage] = useState(false); // State for handling redirection

  useEffect(() => {
    // Set up listener for Firebase authentication state change
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Fixed email and password check
    const fixedEmail = "mosaraf.cse8.bu@gmail.com";
    const fixedPassword = "12345";

    // If email and password match, log in
    if (email === fixedEmail && password === fixedPassword) {
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome back, ${email}!`,
        icon: "success",
        confirmButtonText: "OK",
      });

      // Sign in with Firebase authentication
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Set redirection flag to true after successful login
          setRedirectToNamePage(true);
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: "Login Failed",
            text: "Check your credentials and try again.",
            icon: "error",
            confirmButtonText: "Retry",
          });
        });
    } else {
      Swal.fire({
        title: "Invalid Credentials",
        text: "Please check your email and password.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null); // Clear the user state
        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Sign Out Error:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to log out. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  // If redirection flag is true, redirect to name page
  if (redirectToNamePage) {
    return <Navigate to="/name" />;
  }

  return (
    <div className="bg-slate-200 py-10">
      <div className="lg:w-2/5 w-11/12 mx-auto py-10 bg-white rounded-xl shadow-lg">
        <div>
          <h1 className="text-2xl font-bold text-center">User Login</h1>
        </div>
        <form onSubmit={handleLogin} className="px-10 space-y-3">
          <div>
            <label htmlFor="email" className="text-lg">
              Email:
            </label>{" "}
            <br />
            <input
              className="border w-full h-[40px] rounded-2xl px-5 bg-slate-100"
              type="email"
              name="email"
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
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div>
            {user ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              >
                SignOut
              </button>
            ) : (
              <button
                type="submit"
                className="w-full h-[40px] bg-[#2563EB] text-white font-bold rounded-xl"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin_Login;
