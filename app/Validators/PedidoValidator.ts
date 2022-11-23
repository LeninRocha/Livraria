import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PedidoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    qtdPedido: schema.string.optional([
      rules.maxLength(100)
    ]),
    livroID: schema.number()
  })


  public messages: CustomMessages = {
    'qtdPedido.maxLength': 'A quantidade de caracteres e 100',
  }
}
