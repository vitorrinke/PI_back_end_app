import { Request, Response, NextFunction } from 'express' 
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export class AdminAuthorization {

    async auth(request: Request, response: Response, next: NextFunction) : Promise<any> {
        const authToken = request.headers['authorization']
        
        if (!authToken) {
            return response.status(403).json({response: 'no token'})
        }

        
        const bearer = authToken.split(' ')
        let token = bearer[1]

        try {
            
            let decoded = jwt.verify(token, process.env.SECRET as jwt.Secret) as JwtPayload
            
            if (decoded.admin !== undefined) {
                if (decoded.admin === 1) {
                    next()

                } else {
                    return response.status(403).json({response: 'Usuário sem permissão!'}) 
                }

            } else {
                return response.status(403).json({response: 'Usuário não autenticado!'})
            }
            
        } catch (error) {
            console.error(error)
            return response.status(403).json({response: ' Usuário não autenticado! '})
    
        }
    }
}