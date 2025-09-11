import express from "express"
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

import { JwtService } from "./services/JwtService.js";

// import pool from "./db.js";
dotenv.config();
import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRoutes.js'



const app = express();
const PORT:number = Number(process.env.PORT);
const jwtService = new JwtService()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',userRoutes);
app.use('/admin/login',adminRoutes)







app.post('/login',(req:Request,res:Response)=>{
  const payload = {id:1,email:"test@example.com"}

  const accessToken = jwtService.generateAccesToken(payload)
  // const refreshToken = jwtService.generateRefeshToken(payload)  
  res.json({accessToken})
})

app.get('/protected',(req:Request,res:Response)=>{
  const authHeader=req.headers['authorization']
  const token = authHeader && authHeader?.split(" ")[1]
  if(!token){
    return res.status(401).json({message:"No Token provided"})
  }

  try {
    const decoded = jwtService.verifyAccessToken(token)
    res.json({message:"Access granded",decoded})
  } catch (error) {
    res.status(403).json({message:"Invalid or expired token"})
  }
})


app.get('/', (req: Request, res: Response) => {
  res.send('Backend running!');
});

app.use('/admin',adminRoutes);
app.use('/user',)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))


   