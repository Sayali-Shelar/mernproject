const Category = require('../models/Category');

// CREATE CATEGORY
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ message: "Category already exists" });

    const category = new Category({ name, description });
    await category.save();

    res.status(201).json({ message: "Category created", category });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Get all
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// UPDATE
exports.updateCategory = async (req,res)=>{
  try {                   //model      //function
    const category = await Category.findByIdAndUpdate(req.params.id , { name: req.body.name, description: req.body.description }, { new: true });
    res.json({message:"Update Successfully", category});
    
  } catch (error) {
    res.status(500).json({message:"Server error"});
  }
}


//Delete
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};