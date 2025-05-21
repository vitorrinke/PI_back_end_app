
export interface IServicos {

    create(data:{
        nome_servico: string,
        tipo_cobranca: string,
        valor_unitario: number

    }): Promise<IServicos | undefined>

    findById(id: number): Promise<IServicos | undefined>

    findAll(): Promise<IServicos | undefined>

    findByView(): Promise<IServicos | undefined>

    update(id: number, nome_servico: string, tipo_cobranca: string, valor_unitario: number): Promise<IServicos | undefined>

    delete(id: number): Promise<IServicos | undefined> 
}