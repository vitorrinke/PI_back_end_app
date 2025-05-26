import { Request, Response } from "express"
import { Users } from "../models/users"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export class UsersController {

    async createUser(request: Request, response: Response) {

        try {
            
            let data = {
                nome: request.body.nome,
                email: request.body.email,
                senha: request.body.senha,
                telefone: request.body.telefone,
                tipo_user: request.body.tipo_user,
                data_criacao: request.body.data_criacao
            } 
                
            let user = new Users()
            await user.create(data)

            return response.status(201).json({response: 'usuario criado com sucesso'})
            

        } catch (error) {
            console.error(error)
        }
    }




    async findUserById(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)


            if (isNaN(id)) {
                return response.status(400).json({response: 'id invalido'})
            }

            let user = new Users()
            let user_found =  await user.findById(id) 

            
            return response.status(200).json(user_found)

        } catch (error) {

            console.error(error)

        }
    }


    async findAllUsers(request: Request, response: Response) {

        try {
            
            let users = new Users()
            let all_users = await users.findAll()

            return response.status(200).json(all_users)

        } catch (error) {
            
            console.error(error)
        }
    }


async findUsersByView(request: Request, response: Response) {

        try {
            
            let users_view = new Users()
            let users_view_found = await users_view.findByView()

            return response.status(200).json(users_view_found)

        } catch (error) {
            
            console.error(error)
        }
    }


    async updateUser(request : Request, response: Response) {
        
        try {
            
            let id = parseInt(request.params.id)
            let {nome, email, telefone, tipo_user, data_criacao } = request.body

            let user = new Users()
            await user.update(id, nome, email, telefone, tipo_user, data_criacao)

            return response.status(200).json({response: "usuario atualizado com sucesso"})

        } catch (error) {
            console.error(error)
        }
    }


    async deleteUser(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)

            let user = new Users()
            await user.delete(id)

            return response.status(200).json({response: "usuario deletado com sucesso"})

        } catch (error) {
            console.error(error)
        }
    }





    async login(request: Request, response: Response) {
        try {
            const { email, senha } = request.body;
    
            if (!email || !senha) {
                return response.status(400).json({ message: 'Email e senha são obrigatórios.' });
            }
    
            const user = new Users();
            const found_user = await user.findByEmail(email);
    
            if (!found_user) {
                return response.status(404).json({ message: 'Usuário não encontrado.' });
            }
    
            if (!found_user.senha || typeof found_user.senha !== 'string') {
                return response.status(500).json({ message: 'Senha do usuário inválida no banco de dados.' });
            }
    
            const issenhaValid = bcrypt.compareSync(senha, found_user.senha);
    
            if (!issenhaValid) {
                return response.status(406).json({ message: 'Senha inválida.' });
            }
    
            const token = jwt.sign(
                { email: found_user.email, admin: found_user.tipo_user },
                process.env.SECRET as jwt.Secret,
                { expiresIn: 6000 }
            );
    
            return response.status(200).json({ message: 'Login bem-sucedido.', token,
                 admin: found_user.tipo_user });
    
        } catch (error) {
            console.error("Erro no login:", error);
            return response.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }


    // async login(request: Request, response: Response) {

    //     try {
            
    //         let data = request.body

    //     let user = new Users()
    //     let found_user = await user.findByEmail(data.email)

    //     if (!found_user) {
    //         return response.status(404).json({response: 'usuario não encontrado'})
    //     }

    //     if (found_user.senha && typeof found_user.senha === 'string') {
    //         let ispassword = bcrypt.compareSync(data.password, found_user.senha)

    //         if (ispassword) {
    //             let token = jwt.sign({email: data.email, admin: found_user.tipo_user },
    //                 process.env.SECRET as jwt.Secret,
    //                 {expiresIn: 6000})

    //             response.status(200).json({response: ispassword, token: token})

    //         } else {
    //             response.status(406).json({response: ispassword, message: 'senha invalida'})
    //         }
    //     }

    //     } catch (error) {
    //         console.error(error)    
    //     }        
    // }
}
