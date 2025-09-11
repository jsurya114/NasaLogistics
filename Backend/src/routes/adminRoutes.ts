import express from 'express';
import type { Request, Response } from 'express';
const router=express.Router();
import { JwtService } from "./../services/JwtService.js";
import { AdminController } from '../controllers/adminController.js';
import { AdminService } from '../services/AdminService.js';
import { AdminRepository } from '../repositories/AdminRepository.js';
import { BcryptService } from '../services/BcryptService.js';

import pool from '../../config/db.js';

const adminRepo = new AdminRepository(pool);
const jwtService = new JwtService();
const bcryptService = new BcryptService();
const adminService = new AdminService(adminRepo,bcryptService,jwtService);
const adminController = new AdminController(adminService);



router.post('/login',adminController.login);





export default router;

