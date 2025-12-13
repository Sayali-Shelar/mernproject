import axios from 'axios';
import React, { useState, useEffect } from 'react';

function AddProduct() {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: ""
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  const loadCategories = async () => {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCategories(res.data);
  };

  useEffect(() => { loadCategories(); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const fd = new FormData();
    Object.keys(form).forEach(key => fd.append(key, form[key]));
    if (image) fd.append("image", image);

    await axios.post("http://localhost:5000/api/products", fd, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data"
      }
    });

    alert("Product Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="stock" placeholder="Stock" onChange={handleChange} />

      <select name="category" onChange={handleChange}>
        <option>Select Category</option>
        {categories.map(c => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>

      <input type="file" onChange={e => setImage(e.target.files[0])} />

      <button>Add Product</button>
    </form>
  );
}

export default AddProduct;
