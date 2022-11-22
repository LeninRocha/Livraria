import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    dateVenda: schema.date.nullableAndOptional({}, []),
    descontoVenda: schema.string.nullableAndOptional([
      rules.maxLength(100),
      rules.minLength(3),
    ]),
    vendaCheio: schema.string.nullableAndOptional([
      rules.maxLength(100),
      rules.minLength(3),
    ]),
  })

  public messages: CustomMessages = {
    'dateVenda.date.format': 'Escreva a data no formato "yyyy-mm-dd"',
    'descontoVenda.maxLength': 'A quantidade de carateres em desconto_venda passou de 100',
    'vendaCheio.maxLength': 'A quantidade de carateres em venda_cheio passou de 100',
  }
}
