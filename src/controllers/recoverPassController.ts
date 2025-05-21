import dotenv from 'dotenv'
import { Request, Response } from "express"
import express from 'express'
import jwt from 'jsonwebtoken'
import { Users } from '../models/users'
import { AuthCode } from '../service/authCode'
import { SendEmail } from '../service/sendEmail'

dotenv.config()

export class RecoverPassController {

    async recoverRequest(request: Request, response: Response) {

        let {email} = request.body
        let user = new Users()

        let found_user = await user.findByEmail(email)
        

        if (found_user === undefined || found_user.email === undefined) {
            response.status(404).json({message: 'Email não encontrado'})

        } else {
            let code = new AuthCode()
            let generated_code = code.code()

            let send_email = new SendEmail()
            send_email.sendaws(found_user.email, generated_code.toString()) 

            let token = jwt.sign({ email: found_user.email, authcode: generated_code }, process.env.SECRET as jwt.Secret, {expiresIn: 1200})
            response.status(200).json({ message: token})
        }
    
    }
}
