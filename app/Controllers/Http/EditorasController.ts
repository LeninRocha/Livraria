// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Editor from "App/Models/Editor"
import EditoraValidator from "App/Validators/EditoraValidator"

export default class EditorasController {
    async index({request}){
        const {nomeFantasia, razaoSocial} = request.all()
        const editora = Editor.query()
                           .select(['id', 'nomeFantasia', 'razaoSocial', 'endereco', 'telefone'])
        if(nomeFantasia){
            editora.where('nomeFantasia', nomeFantasia)
            }
        else if(razaoSocial){
            editora.where('razaoSocial', razaoSocial)
            }
        return editora
     }
     async store({request}){
        const dados = await request.validate(EditoraValidator)
        return Editor.create(dados)
     }
     async show({request}){
        const id = request.param('id')
        const show = await  Editor.findOrFail(id)
        return show
    }
    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(EditoraValidator)
        const update = await Editor.findOrFail(id)
        update.merge(dados).save()
        return update
    }
    async destroy({request}){
        const id = request.param('id')
        const delet = await Editor.findOrFail(id)
        delet.delete()
        return delet
    }
}
