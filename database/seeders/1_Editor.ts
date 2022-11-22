import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Editor from 'App/Models/Editor'

export default class extends BaseSeeder {
  public async run () {
    await Editor.createMany([
      {
        nomeFantasia: "nome 1",
        razaoSocial: "nome social 1",
        endereco: "endereco 1",
        telefone: "11111111111"
      },
      {
        nomeFantasia: "nome 2",
        razaoSocial: "nome social 2",
        endereco: "endereco 2",
        telefone: "222222222"
      },
      {
        nomeFantasia: "nome 3",
        razaoSocial: "nome social 3",
        endereco: "endereco 3",
        telefone: "333333333"
      },
      {
        nomeFantasia: "nome 4",
        razaoSocial: "nome social 4",
        endereco: "endereco 4",
        telefone: "4"
      }
      ])
  }
}
