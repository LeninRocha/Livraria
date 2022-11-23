import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pedido from 'App/Models/Pedido'

export default class extends BaseSeeder {
  public async run () {
    await Pedido.createMany([
      {
        qtdPedido: 1,
        livroId: 1
      },
      {
        qtdPedido: 2,
        livroId: 2
      },
      {
        qtdPedido: 3,
        livroId: 3
      },
      {
        qtdPedido: 4,
        livroId: 4
      },
      {
        qtdPedido: 5,
        livroId: 5
      },
    ])
  }
}
