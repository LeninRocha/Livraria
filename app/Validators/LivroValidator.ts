import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LivroValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    isbn: schema.number.nullableAndOptional([
      rules.unique({
        column: 'isbn',
        table: 'livros'
      }),
      rules.maxLength(15)
    ]),
    titulo: schema.string.nullableAndOptional([
      rules.unique({
        column: 'titulo',
        table: 'livros'
      }),
      rules.maxLength(100),
      rules.minLength(1)
    ]),
    preco: schema.number.nullableAndOptional([
      rules.maxLength(100),
      rules.minLength(1)
    ]),
  })

  public messages: CustomMessages = {
    'isbn.required': 'O campo nome não pode se nula',
    'isbn.unique': 'Esse isbn ja esta listado',
    'titulo.required': 'O campo titulo não pode se nula',
    'titulo.unique': 'Esse titulo ja esta listado',
    'preco.required': 'O campo titulo não pode se nula',
    'isbn.maxLength': 'A quantidade de numeros passou de 15',
    'titulo.maxLength': 'A quantidade de numeros passou de 100',
    'preco.maxLength': 'A quantidade de numeros passou de 100'
  }
}
