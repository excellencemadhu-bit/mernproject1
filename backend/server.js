import express from 'express'
let app=express();
import "./config/db.js"
import dotenv from 'dotenv';
import userRouter from './routes/autRoutes.js';
import cors from 'cors';
import productRouter from './routes/productRoutes.js';
dotenv.config();
app.use(express.json())

let port=process.env.PORT||3000;
app.use(cors({origin:"https://myfrontend-qr2f.onrender.com"}))//react origin
app.use("/api/user",userRouter);
app.use("/api/product",productRouter)

app.listen(port,()=>{
console.log(`server running at port ${port}`)
});
