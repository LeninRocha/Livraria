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
      }

      ])
  }
}
