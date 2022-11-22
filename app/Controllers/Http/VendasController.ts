// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda"
import VendaValidator from "App/Validators/VendaValidator"
export default class VendasController {

    async index({request}){
        const {dateVenda} = request.all()
        const venda = Venda.query()
                           .select(['id', 'dateVenda'])
        if(dateVenda){
            venda.where('nome', dateVenda)
            }
        return venda
     }
     async store({request}){
        const dados = await request.validate(VendaValidator)
        return Venda.create(dados)
     }
     async show({request}){
        const id = request.param('id')
        const show = await  Venda.findOrFail(id)
        return show
    }
    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(VendaValidator)
        const update = await Venda.findOrFail(id)
        update.merge(dados).save()
        return update
    }
    async destroy({request}){
        const id = request.param('id')
        const delet = await Venda.findOrFail(id)
        delet.delete()
        return delet
    }
}
