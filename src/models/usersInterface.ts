
export interface Iusers {


    nome?: string,
    email?: string,
    senha?: string,
    tipo_user?: number,
    data_criacao?: string


    create(data: {
        nome: string,
        email: string,
        senha: string,
        telefone: string,
        tipo_user: number,
        data_criacao: string

    }) : Promise<Iusers | undefined>


    findById(id: number)  : Promise<Iusers | undefined>
        

    findAll(): Promise<Iusers | undefined>


    findByEmail(email: string): Promise<Iusers | undefined>


    update(id: number, nome: string, email: string, telefone: string, tipo_user: number, data_criacao: string): Promise<Iusers | undefined>


    delete(id: number): Promise<Iusers | undefined> 
}   
