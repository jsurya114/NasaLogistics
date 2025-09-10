import express from "express"
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
// import pool from "./db.js";
dotenv.config();
import adminRoutes from './routes/adminRoutes.js'

const app = express();
const PORT:number = Number(process.env.PORT);


app.get('/', (req: Request, res: Response) => {
  res.send('Backend running!');
});

app.use('/admin',adminRoutes);
app.use('/user',)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))


   