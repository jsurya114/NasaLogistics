import express from 'express';
import type { Request, Response } from 'express';
const router=express.Router();
import { JwtService } from "./../services/JwtService.js";
// import adminController from './../controllers/adminController.js'

const jwtService= new JwtService();
router.post('/login',(req:Request,res:Response)=>{
//   const payload = {id:1,email:"test@example.com"}
 const data= req.body;
    console.log(req.url)
  const accessToken = jwtService.generateAccesToken(data)
  // const refreshToken = jwtService.generateRefeshToken(payload)  
  res.json({accessToken})
})

// router.post('/admin/upload-data',)



export default router;

