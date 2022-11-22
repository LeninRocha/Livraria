import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([
      rules.unique({
        column: 'matricula',
        table: 'clientes'
      }),
      rules.maxLength(100),
      rules.minLength(1),
    ]),
    cep: schema.number.optional([
      rules.range(0, 9999999999)
    ]),
    rg: schema.number.optional([
      rules.maxLength(15),
    ]),
    endereco:schema.string.optional([
      rules.maxLength(15),
    ]),
  })
  public messages: CustomMessages = {
    'nome.unique': 'Esse nome ja foi cadastrado',
    'nome.maxLength': 'A quantidade de carateres em nome passou de 100',
    'nome.minLength': 'O nome deve possuir no minimo 3 caracteres',
    'cpf.maxLength': 'O cpf possui 11 caracteres',
    'cpf.minLength': 'O cpf possui 11 caracteres',
    'endereco.maxLength': 'A quantidade de numeros passou de 100',
    'rg.maxLength': 'A quantidade de numeros passou de 15',
  }
}
