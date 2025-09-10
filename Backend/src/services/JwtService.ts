import jwt from 'jsonwebtoken'
export class JwtService{
    private jwtSecret:string
    private jwtExpiresIn:string
    private jwtRefreshSecret:string
    private jwtRefreshExpiresIn:string


    constructor(){
        this.jwtSecret=process.env.JWT_SECRET as string
        this.jwtExpiresIn=process.env.JWT_EXPIRES_IN||'20'
        
        this.jwtRefreshSecret=process.env.JWT_REFRESH_SECRET as string
        this.jwtRefreshExpiresIn=process.env.JWT_REFRESH_EXPIRES_IN||'7d'

    }
     
    generateAccesToken(payload:object):string{
        return jwt.sign(payload,this.jwtSecret,{expiresIn:this.jwtExpiresIn})
    }

    verifyAccessToken(token:string):any{
        try{
            return jwt.verify(token,this.jwtSecret)
        }catch(error){
            throw new Error('invalid token')
        }
    }

    generateRefeshToken(payload:object):string{
        return jwt.sign(payload,this.jwtRefreshSecret,{expiresIn:this.jwtRefreshExpiresIn})
    }

    verifyRefreshToken(token:string):any{
        try {
            return jwt.verify(token,this.jwtRefreshSecret)
        } catch (error) {
            throw new Error('invalid')
        }
    }
}