
export interface IOrcamentoItens {
    

    create(data:{
        id_orcamento: number,
        id_servico: number,
        quantidade: number,
        valor_total: number,
        valor_unitario: number

    }) : Promise<IOrcamentoItens | undefined>

    findById(id: number): Promise<IOrcamentoItens | undefined>

    findAllById(id_orcamento: number): Promise<IOrcamentoItens[] | undefined>

    updtade(id: number, id_orcamento: number, id_servico: number, quantidade: number, valor_total: number, valor_unitario: number): Promise<IOrcamentoItens | undefined>

    delete(id: number): Promise<IOrcamentoItens | undefined>
    
    // save(): Promise<IOrcamentoItens>

}


