import { Request, Response } from 'express'
import { OrcamentoItens } from '../models/orcamentoItens'

export class OrcamentoItensController {

    async createOrcamentoIten(request: Request, response: Response)  {
        
        try {
            
            let data = {

            id_orcamento: request.body.id_orcamento,
            id_servico: request.body.id_servico,
            quantidade: request.body.quantidade,
            valor_total: request.body.valor_total,
            valor_unitario: request.body.valor_unitario    
            }

            let orcamento_iten = new OrcamentoItens()
            await orcamento_iten.create(data) 

            return response.status(201).json({response: 'orcamento_iten criado com sucesso'})

           
            
        } catch (error) {

            console.error(error)
        }
    }


    async findOrcamentoItenById(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)

            if(isNaN(id)) {
                response.status(400).json({response: 'id invalido'})
            }

            let orcamento_iten = new OrcamentoItens()
            let orcamento_iten_found = await orcamento_iten.findById(id)

            return response.status(200).json(orcamento_iten_found)

        } catch (error) {
            
            console.error(error)
        }
    }


    async findAllOrcamentoItens(request: Request, response: Response) {

        try {
            
            let orcamento_itens = new OrcamentoItens()
            let all_orcamento_itens = await orcamento_itens.findAll()

            return response.status(200).json(all_orcamento_itens)
        } catch (error) {
            
            console.error(error)
        }
    }


    async updateOrcamentoIten(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)
            let { id_orcamento,
                id_servico,
                quantidade,
                valor_total,
                valor_unitario } = request.body

            let orcamento_iten = new OrcamentoItens()
            await orcamento_iten.updtade(id, id_orcamento,
                id_servico,
                quantidade,
                valor_total,
                valor_unitario)

            return response.status(200).json({response: 'orcamento_iten atualizado com sucesso'})
        } catch (error) {
            
            console.error(error)
        }
    }


    async deleteOrcamentoIten(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)

            let orcamento_iten = new OrcamentoItens()
            await orcamento_iten.delete(id)

            return response.status(200).json({response: 'orcamento_iten deletado com sucesso'})
        } catch (error) {
            
            console.error(error)
        }
    }
}

