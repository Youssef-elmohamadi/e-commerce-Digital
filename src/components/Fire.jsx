import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const Fire = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const categoriesSnapshot = await getDocs(categoriesCollection);
        const categoriesList = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {Object.keys(category).map((key) => (
              key !== "id" && ( 
                <div key={key}>
                  <h2>{key}</h2>
                  <ul>
                    {Array.isArray(category[key]) &&
                      category[key].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              )
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fire;
