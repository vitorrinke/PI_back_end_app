import knexInstance from "../data/connection";
import { IServicos } from "./servicosInterface";

export class Servicos implements IServicos {

    async create(data: {
        nome_servico: string,
        tipo_cobranca: string,
        valor_unitario: number

    }): Promise<IServicos | undefined> {
        
        try {
            
            const receita: IServicos = await knexInstance.insert(data)
            .table('servicos')

            return receita

        } catch (error) {
            console.error(error)

        }
    }


    async findById(id: number): Promise<IServicos | undefined> {
        
        try {
            
            const receita: IServicos = await knexInstance.select("*")
            .where({id:id}).table('servicos')

            return receita

        } catch (error) {
            console.error(error)

        }
    }


    async findAll(): Promise<IServicos | undefined> {
        
        try {
            
            const servicos: IServicos = await knexInstance.select()
            .table('servicos')

            return servicos

        } catch (error) {
            console.error(error)

        }
    }


    async findByView(): Promise<IServicos | undefined> {
        
        try {
            
            const servicos_view : IServicos = await knexInstance.select('*').from('view_servicos_precos')
            
            return servicos_view

        } catch (error) {
            console.error(error)
        }
    }


    async findAllByView(): Promise<IServicos | undefined> {
        
        try {
            
            const servicos_view_view : IServicos = await knexInstance.select('*').from('view_servicos_view')
            
            return servicos_view_view

        } catch (error) {
            console.error(error)
        }
    }


    async update(id: number, nome_servico: string, tipo_cobranca: string, valor_unitario: number): Promise<IServicos | undefined> {
        
        try {
            
            let update_receita: any = {}

            if (nome_servico !== undefined) {
                update_receita.nome_servico = nome_servico
            }


            if (tipo_cobranca !== undefined) {
                update_receita.tipo_cobranca = tipo_cobranca
            }


            if (valor_unitario !== undefined) {
                update_receita.valor_unitario = valor_unitario
            }


            const receita: IServicos = await knexInstance.update(update_receita)
            .where({id:id}).table('servicos')

            return receita

        } catch (error) {
            console.error(error)

        }
    }


    async delete(id: number): Promise<IServicos | undefined> {
        
        try {
            
            const receita: IServicos = await knexInstance.delete()
            .where({id:id}).table('servicos')

            return receita

        } catch (error) {
            console.error(error)
            
        }
    }
}