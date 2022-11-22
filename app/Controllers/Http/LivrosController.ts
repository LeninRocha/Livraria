// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Livro from "App/Models/Livro"
import LivroValidator from "App/Validators/LivroValidator"
export default class LivrosController {
    async index({request}){
        const {titulo, preco} = request.all()
        const livro = Livro.query()
                           .select(['id', 'titulo', 'preco'])
        if(titulo){
            livro.where('titulo', titulo)
            }
        else if(preco){
            livro.where('preco', preco)
            }
        return livro
     }
     async store({request}){
        const dados = await request.validate(LivroValidator)
        return Livro.create(dados)
     }
     async show({request}){
        const id = request.param('id')
        const show = await  Livro.findOrFail(id)
        return show
    }
    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(LivroValidator)
        const update = await Livro.findOrFail(id)
        update.merge(dados).save()
        return update
    }
    async destroy({request}){
        const id = request.param('id')
        const delet = await Livro.findOrFail(id)
        delet.delete()
        return delet
    }
}