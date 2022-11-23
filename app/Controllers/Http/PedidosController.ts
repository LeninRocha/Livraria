// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pedido from "App/Models/Pedido"
import PedidoValidator from "App/Validators/PedidoValidator"
export default class PedidosController {
    async index({request}){
        const {qtd_pedido} = request.all()
        const pedido = Pedido.query()
                           .select(['id', 'qtd_pedido', 'livroId'])
        if(qtd_pedido){
            pedido.where('qtd_pedido', qtd_pedido)
            }
        return pedido.preload("livro")
     }
     async store({request}){
        const dados = await request.validate(PedidoValidator)
        return Pedido.create(dados)
     }
     async show({request}){
        const id = request.param('id')
        const show = await  Pedido.findOrFail(id)
        return show
    }
    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(PedidoValidator)
        const update = await Pedido.findOrFail(id)
        update.merge(dados).save()
        return update
    }
    async destroy({request}){
        const id = request.param('id')
        const delet = await Pedido.findOrFail(id)
        delet.delete()
        return delet
    }
}
