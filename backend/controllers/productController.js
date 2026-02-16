import Product from "../models/productModel.js";


// functions for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller } = req.body;
        
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, description, price, category, subcategory, sizes, bestseller)
        console.log(image1, image2, image3, image4)
        
        res.json({})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }   
}





// functions for list product
const listProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// functions for remove product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await Product.findByIdAndDelete(id);
        res.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}



// functions for single product info
const singleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}



export { addProduct, listProducts, removeProduct, singleProduct };