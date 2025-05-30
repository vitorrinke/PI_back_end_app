import { error } from "console";
import knexInstance from "../data/connection";
import { Iusers } from "./usersInterface";
import bcrypt from 'bcrypt'


export class Users implements Iusers {

    async create(data: { 

        nome: string, 
        email: string, 
        senha: string, 
        telefone: string,
        tipo_user: number,
        data_criacao: string 

    }) : Promise<Iusers | undefined> {
        
        let salt = bcrypt.genSaltSync(10)
        let pass = bcrypt.hashSync(data.senha, salt)

        data.senha = pass

        try {
            
            const user: Iusers = await knexInstance.insert(data).table('users')
            return user

        } catch (error) {

            console.error(error)
        }
        

    }


    async findById(id: number): Promise<Iusers | undefined> {
        
        try {
            
            const user: Iusers = await knexInstance.select([
                "nome", "email", "telefone", "tipo_user", "data_criacao"
            ]).where({id: id}).table('users').first()

            return user

        } catch (error) {

            console.error(error)            
        }
    }


    async findAll(): Promise<Iusers | undefined> {
        
        try {
            
            const users: Iusers = await knexInstance.select([
                "nome", "email", "telefone", "tipo_user", "data_criacao"
            ]).table('users')

            return users

        } catch (error) {

            console.error(error)
        }
    }


    async findByView(): Promise<Iusers | undefined> {
        
        try {
            
            const users_view: Iusers = await knexInstance.select(['*'
            ]).from('view_clientes')

            return users_view

        } catch (error) {

            console.error(error)
        }
    }

    async findByEmail(email: string): Promise<Iusers | undefined> {
        
        try {
            
            const user: Iusers = await knexInstance.select([
                "id", "nome", "email", "senha", "telefone", "tipo_user", "data_criacao"
            ]).where({email: email}).table('users').first()
            
            return user

        } catch (error) {
            
            console.error(error)
        }
    }


    async update(id: number, nome: string, email: string, telefone: string, tipo_user: number, data_criacao: string): Promise<Iusers | undefined> {
        
        try {

            
            
            let updateUser: any = {}

            if (nome !== undefined) {
                updateUser.nome = nome
            }

            if (email !== undefined) {
                updateUser.email = email
            }

            if (telefone !== undefined) {
                updateUser.telefone = telefone
            }

            if (tipo_user !== undefined) {
                updateUser.tipo_user = tipo_user
            }

            if (data_criacao !== undefined) {
                updateUser.data_criacao = data_criacao
            }
             
            if(Object.keys(updateUser).length === 0) {
                throw new Error("not working")
            }

            const user: Iusers = await knexInstance.update(updateUser)
            .where({id:id}).table('users')

            return user

        } catch (error) {
            
            console.error(error)
        }
    }


    async delete(id: number): Promise<Iusers | undefined> {
        
        try {
            
            const user: Iusers = await knexInstance.delete()
            .where({id:id}).table('users')

            return user
        } catch (error) {
            console.error(error)
        }
    }
}