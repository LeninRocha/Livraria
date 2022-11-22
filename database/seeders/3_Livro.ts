import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Livro from 'App/Models/Livro'

export default class extends BaseSeeder {
  public async run () {
    await Livro.createMany([
      {
        isbn: "111111sa1111",
        titulo: "salve 1",
        preco: 10,
        categoriaId: 1,
        editoraId:1
      },
      {
        isbn: "22222222",
        titulo: "salve 2",
        preco: 210,
        categoriaId: 2,
        editoraId:2
      },
      {
        isbn: "3",
        titulo: "salve 3",
        preco: 130,
        categoriaId: 3,
        editoraId:3
      },
      {
        isbn: "4444444444",
        titulo: "salve 4",
        preco: 410,
        categoriaId: 4,
        editoraId:4
      },
      {
        isbn: "55555555555",
        titulo: "salve 51",
        preco: 510,
        categoriaId: 5,
        editoraId:5
      },
    ])
  }
}
