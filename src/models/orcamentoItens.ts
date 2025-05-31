
import { error } from "console";
import knexInstance from "../data/connection";
import { IOrcamentoItens } from "./orcamentoItensInterface";

 export class OrcamentoItens implements IOrcamentoItens {

    async create(
        data: {
            id_orcamento: number,
            id_servico: number,
            quantidade: number,
            valor_total: number,
            valor_unitario: number})

        : Promise<IOrcamentoItens | undefined> {

                
        try{

            const orcamento_itens: IOrcamentoItens = await knexInstance.insert(data).table('orcamento_itens')
            return orcamento_itens
        }
        catch(error){
            console.error(error)
        }
                

    }


    async findById(id: number): Promise<IOrcamentoItens | undefined> {
        
        try {
            
            const orcamento_itens: IOrcamentoItens = await knexInstance.select('*')
            .where({id:id}).table('orcamento_itens').first()
            
            return orcamento_itens

        } catch (error) {
            
            console.error(error)
        }
    
    }


    async findAllById(id_orcamento: number): Promise<IOrcamentoItens[] | undefined> {

        try {
            
            const orcamento_itens: IOrcamentoItens[] = await knexInstance.select('*')
            .from('orcamento_itens').where('id_orcamento', id_orcamento)
        
         return orcamento_itens
        
        } catch{

            console.error(error)
        }
     }


    async updtade(
        id: number, 
        id_orcamento: number,
        id_servico: number,
        quantidade: number,
        valor_total: number,
        valor_unitario: number)
        : Promise<IOrcamentoItens| undefined> {
        
        try {
            let update_orcamento_itens: any = {}

            if (id_orcamento !== undefined) {
                update_orcamento_itens.id_orcamento = id_orcamento
            }

            if (id_servico !== undefined) {
                update_orcamento_itens.id_servico = id_servico
            }

            if (quantidade !== undefined) {
                update_orcamento_itens.quantidade = quantidade
            }

            if (valor_total !== undefined) {
                update_orcamento_itens.valor_total = valor_total
            }

            if (valor_unitario !== undefined) {
                update_orcamento_itens.valor_unitario = valor_unitario
            }

            const orcamento_itens: IOrcamentoItens = await knexInstance.update(update_orcamento_itens)
            .where({id: id}).table('orcamento_itens')

            return orcamento_itens

        } catch (error) {
            
        }
        
    
    }


    async delete(id: number): Promise<IOrcamentoItens | undefined> {
        
        try {
            
            let orcamento_itens : IOrcamentoItens = await knexInstance.delete()
            .where({id:id}).table('orcamento_itens')

            return orcamento_itens
        } catch (error) {
            
            console.error(error)
        }
    
    }


    // async save(): Promise<IOrcamentoItens> {
        
        
    //     return this
    // }

}

