import { Request, Response } from "express";
import { Servicos } from "../models/servicos";

export class ServicosController {

    async createServico(request: Request, response: Response) {

        try {
            
            let data = {
                nome_servico: request.body.nome_servico,
                tipo_cobranca: request.body.tipo_cobranca,
                valor_unitario: request.body.valor_unitario,
            }

            let receita = new Servicos()
            await receita.create(data)

            return response.status(201).json({response: 'serviço criada com sucesso'})

        } catch (error) {
            console.error(error)

        }
    }

    
    async findServicoById(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)

            if (isNaN(id)) {
                return response.status(400).json({response: 'id invalido'})
            }

            let servico = new Servicos()
            let servico_found = await servico.findById(id)

            return response.status(200).json(servico_found)

        } catch (error) {
            console.error(error)

        }
    }


    async findAllServicos(request: Request, response: Response) {

        try {
            
            let servicos = new Servicos()
            let all_servicos = await servicos.findAll()
            
            return response.status(200).json(all_servicos)

        } catch (error) {
            console.error(error)

        }
    }


    async findServicoByView(request: Request, response: Response) {

        try {
            
            let servicos_view = new Servicos()
            let found_servicos_view = await servicos_view.findByView()

            return response.status(200).json(found_servicos_view)

        } catch (error) {
            console.error(error)
            
        }
    }


    async updateServico(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)
            
            if (isNaN(id)) {
                return response.status(400).json({response: 'id invalido'})
            }

            let { nome_servico, tipo_cobranca, valor_unitario } = request.body

            let servico = new Servicos()
            await servico.update(id, nome_servico, tipo_cobranca, valor_unitario )

            return response.status(200).json({response: 'servico atualizada com sucesso'})

        } catch (error) {
            console.error(error)

        }
    }


    async deleteServico(request: Request, response: Response) {

        try {
            
            let id = parseInt(request.params.id)
            
            if (isNaN(id)) {
                return response.status(400).json({response: 'id invalido'})
            }
            
            let servico = new Servicos()
            await servico.delete(id)

            return response.status(200).json({response: 'servico deletada com sucesso'})

        } catch (error) {
            console.error(error)
            
        }
    }
}