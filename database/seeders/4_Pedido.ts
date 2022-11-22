import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pedido from 'App/Models/Pedido'

export default class extends BaseSeeder {
  public async run () {
    await Pedido.createMany([
      {
        qtdPedido: 1,
        idLivro: 1
      },
      {
        qtdPedido: 2,
        idLivro: 2
      },
      {
        qtdPedido: 3,
        idLivro: 3
      },
      {
        qtdPedido: 4,
        idLivro: 4
      },
      {
        qtdPedido: 5,
        idLivro: 5
      },
    ])
  }
}
