import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryList = () => {
      const [categories, setCategories] = useState([]);
    const fetchData = async ()=>{
        const res =   await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
    };
     useEffect(() => { fetchData(); }, []);

  return (
    <div>
         <h2>All Categories</h2>
      {categories.map(cat => (
        <div key={cat._id}>
          🟦 {cat.name}
        </div>
      ))}
    </div>
  )
}

export default CategoryList