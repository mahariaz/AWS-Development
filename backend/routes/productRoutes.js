import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router=express.Router()

// @desc fetch all products
// @route GET /api/products
//@access Public
router.get('/',asyncHandler(async(req,res)=>{
    const products=await Product.find({})
    res.json(products)
}))

// @desc fetch single product
// @route GET /api/products/:id
//@access Public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(Product){
        res.json(product)
    }else{
        res.status(404).json({message:'Product not found'})
    }
    //res.json(product)
}))
router.delete('/delete/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findByIdAndDelete(req.params.id)
    if(Product){
        console.log(' product deleted')
        res.json(product)
    }
  
}))
// router.post('/add/:name',asyncHandler(async(req,res)=>{
//     const addProduct=new Product()
//     addProduct.name=req.params.name

  
// }))
export default router