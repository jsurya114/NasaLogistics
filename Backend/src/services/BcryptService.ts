import bcrypt from 'bcrypt'

export class BcryptService{
    private saltRounds:number

    constructor(){
        this.saltRounds=parseInt(process.env.SALT_ROUNDS||'10',10)
    }

    async hashPassword(password:string):Promise<string>{
        return await bcrypt.hash(password,this.saltRounds)
    }

    async comparePassword(password:string,hash:string):Promise<boolean>{
        return await bcrypt.compare(password,hash)
    }

}

