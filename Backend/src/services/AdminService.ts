import {AdminRepository} from './../repositories/AdminRepository.js'

export class AdminService{
    private adminRepo:AdminRepository
    constructor(adminRepo:AdminRepository){
        this.adminRepo=adminRepo;
    }
}