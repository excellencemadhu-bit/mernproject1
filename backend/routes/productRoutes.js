
import { Router } from "express";
import { addProduct, getProduct, validProduct ,deleteProduct,editPrifill,editProduct, searchProduct} from "../controllers/productController.js";
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
let productRouter=Router();


cloudinary.config({
cloud_name:'dzs6ax84k',
api_key:'937582745489415',
api_secret:'VHjPzxXglJLaHaUBpEx8ZQQCm_g'
})


let storage=new CloudinaryStorage({
cloudinary:cloudinary,
params:{
folder:'products',
allowed_formats:['jpg','png','jpeg']
}
})


const upload=multer({storage:storage});



const verifyToken=async(req,res,next)=>{
try{
const authHeader=req.headers.authorization;
if(!authHeader) return res.status(400).json({"message":"Token not found"});
const token=authHeader.split(' ')[1];
console.log(token)
if(!token) return res.status(400).json({"message":"unauthorized"});

const decode=jwt.verify(token,process.env.SECRET_KEY)
req.user=decode;
next()
}
catch(err)
{
return res.status(401).json({"message":err})
}
}


productRouter.post("/addproduct",verifyToken,upload.single("image"),validProduct,addProduct);
productRouter.get("/getproduct",verifyToken,getProduct);
productRouter.delete("/deleteproduct/:id",verifyToken,deleteProduct)
productRouter.get("/editprifill/:id",verifyToken,editPrifill);
productRouter.put("/editproduct/:id",verifyToken,validProduct,editProduct)
productRouter.get("/searchproduct/:key",verifyToken,searchProduct)
export default productRouter;
