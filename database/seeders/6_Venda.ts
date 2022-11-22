import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {
        pedidoId: 1,
        clienteId: 1,
        dateVenda: DateTime.fromSQL('2022-1-1 1:1:1'),
        descontoVenda: 10,
        VendaCheia: 20,
      },
      {
        pedidoId: 2,
        clienteId: 2,
        dateVenda: DateTime.fromSQL('2022-2-2 2:2:2'),
        descontoVenda: 20,
        VendaCheia: 30,
      },
      {
        pedidoId: 3,
        clienteId: 3,
        dateVenda: DateTime.fromSQL('2022-3-3 3:3:3'),
        descontoVenda: 20,
        VendaCheia: 30,
      },
      {
        pedidoId: 2,
        clienteId: 2,
        dateVenda: DateTime.fromSQL('2022-4-4 4:4:4'),
        descontoVenda: 20,
        VendaCheia: 30,
      },
      {
        pedidoId: 2,
        clienteId: 2,
        dateVenda: DateTime.fromSQL('2022-5-5 5:5:5'),
        descontoVenda: 20,
        VendaCheia: 30,
      },
    ])
  }
}
