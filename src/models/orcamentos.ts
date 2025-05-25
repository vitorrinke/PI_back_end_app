import knexInstance from "../data/connection";
import { IOrcamentos } from "./orcamentosInterface"

export class Orcamentos implements IOrcamentos {

    async create(data: { 
        id_cliente: number,
        descricao: string,
        data_criacao: string,
        data_atualizacao: string,
        status: string,
        progresso: number,
        valor_total: number

    }): Promise<IOrcamentos | undefined> {
        
        try {
            
            const orcamento: IOrcamentos = await knexInstance.insert(data)
            .table('orcamentos')

            return orcamento

        } catch (error) {
            console.error(error)

        }
    }


    async findById(id: number): Promise<IOrcamentos | undefined> {
        
        try {
            
            const orcamento: IOrcamentos = await knexInstance.select()
            .where({id:id}).table('orcamentos')

            return orcamento

        } catch (error) {
            console.error(error)

        }
    }


    async findAll(): Promise<IOrcamentos | undefined> {
        
        try {
            
            const orcamentos: IOrcamentos = await knexInstance.select()
            .table('orcamentos')

            return orcamentos

        } catch (error) {
            console.error(error)

        }
    }


    async findByView(): Promise<IOrcamentos | undefined> {
        
        try {
            
            const orcamentos_view : IOrcamentos = await knexInstance.select('*').from('view_orcamentos_clientes')

            return orcamentos_view

        } catch (error) {
            console.error(error)
            
        }
    }


    async findAllByView(): Promise<IOrcamentos | undefined> {
        
        try {
            
            const orcamentos_all_view : IOrcamentos = await knexInstance.select('*').from('view_orcamentos')

            return orcamentos_all_view

        } catch (error) {
            console.error(error)
            
        }
    }


    async update(id: number, id_cliente: number,
        descricao: string,
        status: string,
        progresso: number,
        valor_total: number): Promise<IOrcamentos | undefined> {
        
        try {
            
            let update_orcamento: any = {}
            
            if(id_cliente !== undefined) {
                update_orcamento.id_cliente = id_cliente
            }


            if (descricao !== undefined) {
                update_orcamento.descricao = descricao
            }


            if (status !== undefined) {
                update_orcamento.status = status
            }

            if(progresso !== undefined) {
                update_orcamento.progresso = progresso
            }

            if(valor_total !== undefined) {
                update_orcamento.valor_total = valor_total
            }

            const orcamento: IOrcamentos = await knexInstance.update(update_orcamento)
            .where({id:id}).table('orcamentos')

            return orcamento
        } catch (error) {
            console.error(error)

        }
    }


    async delete(id: number): Promise<IOrcamentos | undefined> {
        
        try {
            
            const orcamento: IOrcamentos = await knexInstance.delete()
            .where({id:id}).table('orcamentos')

            return orcamento

        } catch (error) {
            console.error(error)
            
        }
    }
}