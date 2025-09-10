import express from "express"
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
// import pool from "./db.js";
dotenv.config();

const app = express();
const PORT:number = Number(process.env.PORT);


app.get('/', (req: Request, res: Response) => {
  res.send('Backend running!');
});





app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))


   