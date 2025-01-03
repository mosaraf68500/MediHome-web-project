import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import Swal from "sweetalert2";

const User_Login = () => {
  const [user, setuser] = useState(null);

  const UserProvider = new GoogleAuthProvider();

  const handleUserLoginWithGoogle = () => {
    signInWithPopup(auth, UserProvider)
      .then((result) => {
        if (!result.user.emailVerified) {
          Swal.fire({
            title: "Email Not Verified",
            text: "Please verify your email before logging in.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Resend Verification Email",
            cancelButtonText: "Close",
          }).then((res) => {
            if (res.isConfirmed) {
              sendEmailVerification(result.user)
                .then(() => {
                  Swal.fire({
                    title: "Verification Email Sent",
                    text: "Check your email for the verification link.",
                    icon: "info",
                    confirmButtonText: "OK",
                  });
                })
                .catch((error) => {
                  console.error(error);
                  Swal.fire({
                    title: "Error",
                    text: "Failed to send verification email. Please try again later.",
                    icon: "error",
                    confirmButtonText: "OK",
                  });
                });
            }
          });
        } else {
          setuser(result.user);
          Swal.fire({
            title: "Login Successful!",
            text: `Welcome, ${result.user.displayName}!`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Login Failed",
          text: "Google login failed. Please try again!",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setuser(null);
        Swal.fire({
          title: "Signed Out",
          text: "You have successfully signed out.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Sign-out failed. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          Swal.fire({
            title: "Email Not Verified",
            text: "Please verify your email before logging in.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Resend Verification Email",
            cancelButtonText: "Close",
          }).then((res) => {
            if (res.isConfirmed) {
              sendEmailVerification(result.user)
                .then(() => {
                  Swal.fire({
                    title: "Verification Email Sent",
                    text: "Check your email for the verification link.",
                    icon: "info",
                    confirmButtonText: "OK",
                  });
                })
                .catch((error) => {
                  console.error(error);
                  Swal.fire({
                    title: "Error",
                    text: "Failed to send verification email. Please try again later.",
                    icon: "error",
                    confirmButtonText: "OK",
                  });
                });
            }
          });
        } else {
          setuser(result.user);
          Swal.fire({
            title: "Login Successful!",
            text: `Welcome back, ${result.user.email}!`,
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
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
  };

  const handleForgotPassword = () => {
    Swal.fire({
      title: "Reset Password",
      input: "email",
      inputLabel: "Enter your email address",
      inputPlaceholder: "example@example.com",
      confirmButtonText: "Send Reset Link",
    }).then((result) => {
      if (result.isConfirmed) {
        sendPasswordResetEmail(auth, result.value)
          .then(() => {
            Swal.fire({
              title: "Email Sent",
              text: "Check your email for the password reset link.",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error",
              text: "Failed to send reset email. Please try again.",
              icon: "error",
              confirmButtonText: "Retry",
            });
          });
      }
    });
  };

  return (
    <div className="bg-slate-200 py-10">
      <div className="lg:w-2/5 w-11/12 mx-auto py-10 bg-white rounded-xl shadow-lg">
        <div>
          <h1 className="text-2xl font-bold text-center">User Login</h1>
        </div>
        <form onSubmit={handleLogin} className="px-10 space-y-3">
          <div>
            <label htmlFor="email" className="text-lg">Email:</label> <br />
            <input
              className="border w-full h-[40px] rounded-2xl px-5 bg-slate-100"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg">Password:</label> <br />
            <input
              className="border w-full h-[40px] rounded-2xl px-5 bg-slate-100"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full h-[40px] bg-[#2563EB] text-white font-bold rounded-xl"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-primary underline mt-2"
            >
              Forgot Password?
            </button>
          </div>
          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <NavLink to="/user_register" className="text-primary">
                Register Now
              </NavLink>
            </p>
          </div>
          <div className="divider"></div>
          <div className="text-center">
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
                type="button"
                onClick={handleUserLoginWithGoogle}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg flex items-center justify-center"
              >
                <FcGoogle className="mr-2" />
                Login With Google
              </button>
            )}
            {user && <h4>{user.displayName}</h4>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_Login;
