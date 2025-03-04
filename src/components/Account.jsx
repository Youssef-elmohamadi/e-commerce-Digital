import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const fetchUserData = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserData(userSnap.data());
      } else {
        setError("User data not found");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchUserData(user.uid);
      } else {
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const logoutUser = async () => {
    try {
      await signOut(auth);
      console.log("تم تسجيل الخروج بنجاح!");
    } catch (error) {
      console.error("خطأ في تسجيل الخروج:", error.message);
    }
  };

  return (
    <div className="md:w-3/6 lg:w-4/6 flex-grow w-full">
      <div className="text-2xl font-semibold mb-2">My Account</div>
      <div className="text-gray-500 text-xl">Account Information</div>
      {loading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : userData ? (
        <div className="mt-4">
          <p>
            {userData.firstName} {userData.lastName}
          </p>
          <p>{userData.email}</p>

          <button
            onClick={logoutUser}
            className="bg-primary text-white py-2 px-4 mt-4 rounded-md"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Account;
