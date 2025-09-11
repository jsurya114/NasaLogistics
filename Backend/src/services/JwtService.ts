import jwt,{SignOptions} from 'jsonwebtoken'
import type { StringValue } from "ms"
export class JwtService{
    private jwtSecret:string
    private jwtExpiresIn:StringValue
    // private jwtRefreshSecret:string
    // private jwtRefreshExpiresIn:StringValue


    constructor(){
        this.jwtSecret=process.env.JWT_SECRET as string
        this.jwtExpiresIn=process.env.JWT_EXPIRES_IN as StringValue
        
        // this.jwtRefreshSecret=process.env.JWT_REFRESH_SECRET as string
        // this.jwtRefreshExpiresIn=process.env.JWT_REFRESH_EXPIRES_IN as StringValue

    }
     
    generateAccesToken(payload:object):string{
        const options:SignOptions={expiresIn:this.jwtExpiresIn}
        return jwt.sign(payload,this.jwtSecret,options)
    }

    verifyAccessToken(token:string):any{
        try{
            return jwt.verify(token,this.jwtSecret)
        }catch(error){
            throw new Error('invalid token')
        }
    }

    // generateRefeshToken(payload:object):string{
    //     const options :SignOptions={expiresIn:this.jwtRefreshExpiresIn}
    //     return jwt.sign(payload,this.jwtRefreshSecret,options)
    // }

    // verifyRefreshToken(token:string):any{
    //     try {
    //         return jwt.verify(token,this.jwtRefreshSecret)
    //     } catch (error) {
    //         throw new Error('invalid')
    //     }
    // }
}