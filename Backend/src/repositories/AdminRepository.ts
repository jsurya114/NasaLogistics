import {Pool} from 'pg';
import { Admin } from "../models/Admin.js";

export class AdminRepository{
    private db: Pool
    constructor(db: Pool){
        this.db=db
    }

    async adminFindByEmail(email:string):Promise<Admin|null>{
        const result = await this.db.query("SELECT * FROM admin where email=$1",[email]);
        return result.rows[0] || null;
    }


}