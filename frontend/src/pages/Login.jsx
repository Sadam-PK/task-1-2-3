import React, { useState } from "react";
import { faAngleLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "../components/CustomInput";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/user/login", userData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/dashboard");
        } else {
          alert("Login failed", res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex sm:flex-row w-full h-auto flex-col-reverse">
      {/* ############ form section ---- div ############ */}
      <div
        className="flex flex-col w-full mx-auto py-5
         justify-around items-center gap-32"
      >
        <div className="flex flex-col w-[50%] mx-auto text-[14px]">
          <a href="#" className="text-gray-400 sm:block hidden">
            <FontAwesomeIcon icon={faAngleLeft} className="text-gray-400" />{" "}
            Back
          </a>
        </div>

        {/* ############ login form #################*/}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start">
            <h2 className=" text-[36px] font-bold text-red-500">Sign In</h2>
            <p className="text-[16px] text-gray-500">
              Enter your email and password to sign in!
            </p>
            <div className="flex flex-row items-center w-[100%] text-gray-400">
              <div className="flex-1 bg-gray-300 h-[1px]" />
              <span className="px-2 py-4">or</span>
              <div className="flex-1 bg-gray-300 h-[1px]" />
            </div>
            <label htmlFor="" className="pb-2 text-[14px]">
              Email<span className="text-red-500">*</span>{" "}
            </label>
            {/* email input */}

            <CustomInput
              placeholder="mail@simmmple.com"
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
            />

            <label className="pt-4 pb-2 text-[14px]">
              Password<span className="text-red-500">*</span>{" "}
            </label>
            {/* password input */}
            <CustomInput
              type="password"
              placeholder="Min. 8 characters"
              icon={<FontAwesomeIcon icon={faEye} />}
              onChange={(e) =>
                setuserData({ ...userData, password: e.target.value })
              }
            />

            <div className="flex flex-row py-6 gap-10 text-sm">
              <label className="text-[14px]">
                <input type="checkbox" className="mr-3" />
                Keep me logged in
              </label>
              <a href="#" className="text-red-500">
                Forget password?
              </a>
            </div>
            {/* signin button */}

            <button
              className="bg-red-500 w-full sm:w-[24vw] h-[6vh] text-white rounded-xl font-bold
          hover:bg-purple-700 transition delay-50"
              type="submit"
            >
              Sign In
            </button>
            <div className="flex flex-row py-6 gap-1 text-sm text-[14px]">
              <p>Not registered yet?</p>
              <a href="#" className="text-red-500">
                Create an Account
              </a>
            </div>
          </div>
        </form>

        <div className="flex flex-col justify-start items-start text-gray-500 text-[14px]">
          <p>&copy; 2023 Spark Drive. All rights reserved</p>
        </div>
      </div>

      {/* ############ logo section ---- div  ############*/}
      <div
        className="flex sm:flex-col w-full justify-between items-center
           bg-red-600 py-5 mx-auto flex-col-reverse h-screen sm:h-auto"
        style={{
          borderBottomLeftRadius: "110px",
        }}
      >
        {/* ############ height div ############ */}
        <div />
        <div
          className="text-center rounded-3xl flex flex-col pt-20
          justify-center items-center"
        >
          <div>
            <img src={logo} className="w-[360px] h-[80px]" />
          </div>
          <div className="h-20" />

          <div
            className="text-center sm:w-[28vw] sm:h-[16vh] flex flex-col justify-center
            items-center rounded-3xl sm:ml-10 w-full py-2"
            style={{ border: "2px solid rgba(255, 255, 255, 0.2)" }}
          >
            <p className="text-white font-light">
              Learn more about Air Drive on{" "}
            </p>
            <h2 className="font-bold text-xl text-white">Spark.pl</h2>
          </div>
        </div>

        <div
          className="flex flex-row justify-between text-white text-[14px] 
        w-full sm:w-auto px-10"
        >
          <a href="#" className="text-white sm:hidden block">
            <FontAwesomeIcon icon={faAngleLeft} className="text-white" /> Back
          </a>
          <div>
            <ul className="flex flex-row gap-5">
              <li>Licence</li>
              <li>Terms of Use</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
