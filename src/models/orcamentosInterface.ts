
export interface IOrcamentos {

    create(data:{
        id_cliente: number,
        descricao: string,
        data_criacao: string,
        data_atualizacao: string,
        status: string,
        progresso: number,
        valor_total: number
        
    }): Promise<IOrcamentos | undefined>

    findById(id: number): Promise<IOrcamentos | undefined>

    findAll(): Promise<IOrcamentos | undefined>

    findByView(): Promise<IOrcamentos | undefined>

    findAllByView(): Promise<IOrcamentos | undefined>

    findMeuByView(id_cliente: number): Promise<IOrcamentos[] | undefined>

    update(id: number,
        id_cliente: number,
        descricao: string,
        status: string,
        progresso: number,
        valor_total: number): Promise<IOrcamentos | undefined>

    delete(id: number): Promise<IOrcamentos | undefined>   
}