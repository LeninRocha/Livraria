// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria"
import CategoriaValidator from "App/Validators/CategoriaValidator"
export default class CategoriasController {
    async index({request}){
        const {nome} = request.all()
        const categoria = Categoria.query()
                           .select(['id', 'nome'])
        if(nome){
            categoria.where('nome', nome)
            }
        return categoria.preload("livro")
     }
     async store({request}){
        const dados = await request.validate(CategoriaValidator)
        return Categoria.create(dados)
     }
     async show({request}){
        const id = request.param('id')
        const show = await  Categoria.findOrFail(id)
        return show
    }
    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(CategoriaValidator)
        const update = await Categoria.findOrFail(id)
        update.merge(dados).save()
        return update
    }
    async destroy({request}){
        const id = request.param('id')
        const delet = await Categoria.findOrFail(id)
        delet.delete()
        return delet
    }
}
