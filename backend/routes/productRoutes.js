const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const upload=require('../middleware/uploadMiddleware');
const {createProduct,getProducts,updateProduct,deleteProduct}=require('../controllers/productController')




router.post("/", protect, admin, upload.single("image"), createProduct);
router.get("/", getProducts);
router.put("/:id", protect, admin, upload.single("image"), updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;