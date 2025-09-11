import {Pool} from 'pg';
import { Admin } from "../models/Admin.js";

export class AdminRepository{
    private db: Pool
    constructor(db: Pool){
        this.db=db
    }

    async login(){
        
    }


}