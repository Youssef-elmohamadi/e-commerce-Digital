import React, { useState } from "react";
import { auth, db } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState(0);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const checkPasswordStrength = (pwd) => {
    let strengthValue = 0;
    if (pwd.length > 8) strengthValue++;
    if (pwd.match(/[A-Z]/)) strengthValue++;
    if (pwd.match(/[a-z]/)) strengthValue++;
    if (pwd.match(/[0-9]/)) strengthValue++;
    if (pwd.match(/[\W]/)) strengthValue++;
    setStrength(strengthValue);
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkPasswordStrength(pwd);
  };
  const strengthColors = [
    "bg-red-500", // Very Weak
    "bg-orange-500", // Weak
    "bg-yellow-500", // Medium
    "bg-green-500", // Strong
    "bg-green-500", // Very Strong
  ];
  const registerUser = async (email, password, firstName, lastName, error) => {
    try {
      // إنشاء المستخدم في Authentication

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // حفظ بيانات المستخدم في Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });
      navigate("/");
      return user;
    } catch (error) {
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUser(email, password, firstName, lastName);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="py-4 my-4 bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white font-semibold">
        Create New Customer Account
      </div>
      <div>
        <div className="bg-gray-50 xl:w-3/4 md:w-5/6 mx-auto my-8 container py-3">
          <form onSubmit={handleSubmit}>
            <legend className="md:ml-[40%] text-gray-600">
              Personal Information
            </legend>
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                First Name
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-full md:w-5/12 border px-1 py-1"
                type="text"
              />
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                Last Name
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-full md:w-5/12 border px-1 py-1"
                type="text"
              />
            </div>
            <legend className="md:ml-[40%] text-gray-600">
              SignIn Information
            </legend>
            {error && (
              <p className="text-red-500 w-full md:w-5/12  md:ml-[40%]">
                {error}
              </p>
            )}
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full md:w-5/12 border px-1 py-1"
                type="email"
              />
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                Password
              </label>
              <input
                value={password}
                onChange={handleChange}
                className="w-full md:w-5/12 border px-1 py-1"
                type={showPassword ? "text" : "password"}
              />
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                Confirm Password
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="w-full md:w-5/12 border px-1 py-1"
                type={showPassword ? "text" : "password"}
              />
              {password.length > 0 && (
                <div className="w-full md:ml-[218px] -mt-4 ml-0 my-2 md:w-5/12 h-10 rounded-sm">
                  <div
                    className={`transition-all duration-300 ease-in-out ${strengthColors[strength]} flex items-center rounded-sm h-full`}
                    style={{ width: `${(strength / 4) * 100}%` }}
                  ></div>
                  <p className="-mt-7 px-5 w-full h-full text-sm font-medium text-gray-600 ">
                    Password Strength:
                    {
                      [
                        "Very Weak",
                        " Weak",
                        " Medium",
                        " Strong",
                        " Very Strong",
                      ][strength]
                    }
                  </p>
                </div>
              )}
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:ml-[40%] ">
              <input
                onChange={(e) => setShowPassword(e.target.checked)}
                type="checkbox"
                id="show-password"
              />
              <label htmlFor="show-password">Show Password</label>
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:ml-[41%] ">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md"
              >
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
