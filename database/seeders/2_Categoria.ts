import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoria from 'App/Models/Categoria'

export default class extends BaseSeeder {
  public async run () {
    await Categoria.createMany([
      {nome: "nome categoria 1"},
      {nome: "nome categoria 2"},
      {nome: "nome categoria 3"},
      {nome: "nome categoria 4"},
      {nome: "nome categoria 5"}
    ])
  }
}
