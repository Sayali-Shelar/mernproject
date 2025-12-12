import React, { useState } from 'react'
import axios from 'axios';

const AddCategory = () => {

    const [category, setCategory] = useState({ name: "", description: "" });

  const handleChange = e => setCategory({ ...category, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    await axios.post("http://localhost:5000/api/categories",
      category,
      { headers: { Authorization: "Bearer " + token } }
    );

    alert("Category Added");
  };
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <textarea name="description" placeholder="Description" onChange={handleChange} />
            <button>Add Category</button>
        </form>

    </div>
  )
}

export default AddCategory