const Product = require('../models/Product');

//CREATE PRODUCT

 exports.createProduct = async (req , res)=>{
    try {
        const {name, description, price, category, stock}=req.body;
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            image:req.file ? "./uploads"+req.file.filename : null
        });
        await product.save();
        res.status(201).json({message:"Product Created",product});

    } catch (error) {
         res.status(500).json({ message: "Server error", error: error.message });
        
    }
};



// get all products
exports.getProducts = async (req,res)=>{
    try {
        const products = await Product.find().populate("category");
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

}

//updated products

exports.updateProduct = async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
    };

    if (req.file) updateData.image = "/uploads/" + req.file.filename;

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ message: "Updated", product: updated });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};