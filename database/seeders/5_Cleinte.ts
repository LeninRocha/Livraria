import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        nome: "Cliente 1",
        cpf: 12345678910,
        rg:123456710,
        endereco: "salve 123"
      },
      {
        nome: "Cliente 2",
        cpf: 12345678912,
        rg:1234567102,
        endereco: "salve 122"
      },
      {
        nome: "Cliente 3",
        cpf: 12345678913,
        rg:123456713,
        endereco: "salve 1233"
      },
      {
        nome: "Cliente 4",
        cpf: 12345678914,
        rg:123456714,
        endereco: "salve 124"
      },
      {
        nome: "Cliente 5",
        cpf: 12345678915,
        rg:123456715,
        endereco: "salve 125"
      },
    ])
  }
}
