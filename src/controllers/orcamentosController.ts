import { Request, Response } from 'express'
import { Orcamentos } from '../models/orcamentos'

export class OrcamentosController {

    async createOrcamento(request: Request, response: Response)  {
        
        try {
            
            let data = {

            id_cliente: request.body.id_cliente,
            descricao: request.body.descricao,
            data_criacao: request.body.data_criacao,
            data_atualizacao: request.body.data_atualizacao,
            status: request.body.status,
            progresso: request.body.progresso,
            valor_total: request.body.valor_total,
            }

            let orcamento = new Orcamentos()
            await orcamento.create(data) 

            return response.status(201).json({response: 'orçamento criado com sucesso'})

           
            
        } catch (error) {

            console.error(error)
        }
    }


    async findOrcamentoById(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)

            if(isNaN(id)) {
                response.status(400).json({response: 'id invalido'})
            }

            let orcamento = new Orcamentos()
            let orcamento_found = await orcamento.findById(id)

            return response.status(200).json(orcamento_found)

        } catch (error) {
            
            console.error(error)
        }
    }


    async findAllOrcamentos(request: Request, response: Response) {

        try {
            
            let orcamentos = new Orcamentos()
            let all_orcamentos = await orcamentos.findAll()

            return response.status(200).json(all_orcamentos)
        } catch (error) {
            
            console.error(error)
        }
    }


    async findOrcamentoByView(request: Request, response: Response) {

        try {
            
            let orcamento_view = new Orcamentos()
            let orcamento_view_found = await orcamento_view.findByView()

            return response.status(200).json(orcamento_view_found)
        } catch (error) {
            
            console.error(error)
        }
    }


    async findOrcamentosByView(request: Request, response: Response) {

        try {
            
            let orcamentos_view = new Orcamentos()
            let orcamentos_view_found = await orcamentos_view.findAllByView()

            return response.status(200).json(orcamentos_view_found)
        } catch (error) {
            
            console.error(error)
        }
    }


    async updateOrcamento(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)
            let { id_cliente,
                descricao,
                status,
                progresso,
                valor_total } = request.body

            let orcamento = new Orcamentos()
            await orcamento.update(id, 
                id_cliente,
                descricao,
                status,
                progresso,
                valor_total)

            return response.status(200).json({response: 'orcamento atualizado com sucesso'})
        } catch (error) {
            
            console.error(error)
        }
    }


    async deleteOrcamento(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)

            let orcamento = new Orcamentos()
            await orcamento.delete(id)

            return response.status(200).json({response: 'orcamentos deletado com sucesso'})
        } catch (error) {
            
            console.error(error)
        }
    }
}