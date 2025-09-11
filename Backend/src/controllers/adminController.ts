 import {AdminService} from './../services/AdminService.js'
 import type { Request,Response } from 'express'

 export class AdminController{

    private adminService:AdminService
    constructor(adminService:AdminService){
        this.adminService=adminService
    }

        login = async(req:Request,res:Response):Promise<void>=>{
         try{
            
            const {email,password}=req.body;            
         const result= await this.adminService.allowAdminLogin(email,password);
         res.status(200).json({message:"Login Successfull",result});
        }catch(err:any){
            res.status(400).json({message: err.message})
        }

    } 
    
 }