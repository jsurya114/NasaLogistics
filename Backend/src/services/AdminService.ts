import {AdminRepository} from './../repositories/AdminRepository.js'
import { Admin } from '../models/Admin.js';
import { BcryptService } from './BcryptService.js';
import { JwtService } from './JwtService.js';


export class AdminService{
    private adminRepo:AdminRepository
    private bcryptService:BcryptService
    private jwtService:JwtService
    constructor(adminRepo:AdminRepository,bcryptService:BcryptService,
        jwtService:JwtService
    ){
        this.adminRepo=adminRepo;
        this.bcryptService=bcryptService;
        this.jwtService=jwtService;
    }

    async allowAdminLogin(email:string,password: string):Promise<{accessToken:string}>{
       
        // console.log("Reached Service ", email,password)
        const admin = await this.adminRepo.adminFindByEmail(email);
        // console.log("Admin found from Repo",admin);
        if (!admin) throw new Error("Admin not found");

    const isMatch = await this.bcryptService.comparePassword(password, admin.password);
    // console.log("Admin Available ",isMatch);
    if (!isMatch) throw new Error("Invalid credentials");
    const accessToken = this.jwtService.generateAccesToken({ id: admin.id, email: admin.email });
    console.log("Access Token",accessToken);
    return { accessToken };
    
    }

}