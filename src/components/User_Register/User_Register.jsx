import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";

const User_Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    console.log(name, email, password, confirmPassword);
    setErrorMessage("");

    if (password.length < 6) {
      Swal.fire({
        title: "Wrong Password!",
        text: "Password should be 6 characters or longer.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      return;
    }

    const passwordValidation =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    if (!passwordValidation.test(password)) {
      Swal.fire({
        title: "Wrong Password!",
        text: "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match!",
        text: "Please make sure your passwords match before submitting.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonText: "Cool",
        });
        // Email verification
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification done!");
        });

        form.reset(); // Reset form after successful registration

        // Redirect to home page
        navigate("/"); // Redirect to the home page after successful registration
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops!",
          text: error.message || "Something went wrong, please try again!",
          icon: "error",
          confirmButtonText: "Okay",
        });
        setErrorMessage(error.message);
        form.reset(); // Reset form after error
      });
  };

  return (
    <div className="bg-slate-200 py-20">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-100 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-100 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-slate-100 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a password"
              />
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  setShowPassword(!showPassword); // Toggle password visibility
                }}
                className="btn btn-xs absolute right-2 top-10"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm"
                className="w-full bg-slate-100 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  setShowPassword(!showPassword); // Toggle password visibility
                }}
                className="btn btn-xs absolute right-2 top-11"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <NavLink to="/user_login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User_Register;
