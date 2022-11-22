// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"
export default class ClientesController {
    async index({request}){
        const {nome, cpf, rg} = request.all()
        const cliente = Cliente.query()
                           .select(['id', 'nome', 'cpf', 'rg'])
        if(nome){
            cliente.where('nome', nome)
            }
        if(nome){
            cliente.where('cpf', cpf)
            }
        if(nome){
            cliente.where('rg', rg)
            }
        return cliente.preload("venda")
     }
     async store({request}){
        const dados = await request.validate(ClienteValidator)
        return Cliente.create(dados)
     }
     async show({request}){
        const id = request.param('id')
        const show = await  Cliente.findOrFail(id)
        return show
    }
    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(ClienteValidator)
        const update = await Cliente.findOrFail(id)
        update.merge(dados).save()
        return update
    }
    async destroy({request}){
        const id = request.param('id')
        const delet = await Cliente.findOrFail(id)
        delet.delete()
        return delet
    }
}
