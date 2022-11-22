import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.nullableAndOptional([
      rules.unique({
        column: 'nome',
        table: 'categorias'
      }),
      rules.maxLength(100),
      rules.minLength(3),
    ])
  })


  public messages: CustomMessages = {
    'nome.unique': 'Esse nome ja foi cadastrado',
    'nome.maxLength': 'A quantidade de carateres em nome passou de 100',
    'nome.minLength': 'O nome deve possuir no minimo 3 caracteres',
  }
}
