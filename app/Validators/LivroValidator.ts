import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LivroValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    isbn: schema.string.optional([
      rules.unique({
        column: 'isbn',
        table: 'livros'
      }),
      rules.maxLength(15)
    ]),
    titulo: schema.string.optional([
      rules.maxLength(100),
      rules.minLength(1)
    ]),
    preco: schema.number.optional([
      rules.range(0, 9999)
    ]),

    editorId: schema.number(),
    categoriaId: schema.number()
  })

  public messages: CustomMessages = {
    'isbn.required': 'O campo nome não pode se nula',
    'isbn.unique': 'Esse isbn ja esta listado',
    'titulo.required': 'O campo titulo não pode se nula',
    'titulo.unique': 'Esse titulo ja esta listado',
    'preco.required': 'O campo titulo não pode se nula',
    'isbn.maxLength': 'A quantidade de numeros passou de 15',
    'titulo.maxLength': 'A quantidade de numeros passou de 100',
  }
}
