 import {AdminService} from './../services/AdminService.js'
 export class AdminController{

    private adminService:AdminService
    constructor(adminService:AdminService){
        this.adminService=adminService
    }
 }