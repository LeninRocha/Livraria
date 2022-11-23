import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EditoraValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nomeFantasia: schema.string.optional([
      //rules.unique({
      //  column: 'nomeFantasia',
      //  table: 'editors'
      //}),
      rules.maxLength(100),
      rules.minLength(5),
    ]),
    razaoRocial: schema.string.optional([
      //rules.unique({
      //  column: 'razao_social',
      //  table: 'editors'
      //}),
      rules.maxLength(100), 
      rules.minLength(10),
      rules.alpha()
    ]),
    endereco: schema.string.nullableAndOptional([
      rules.maxLength(100),
    ]),
    telefone: schema.string.nullableAndOptional([
      rules.maxLength(15),
    ])
  })

  public messages: CustomMessages = {
    alpha: 'O campo não aceita Letras',
    //'nomeFantasia.unique': 'Esse nome fantasia ja foi criado',
    'razaoRocial.unique': 'Essa rasão social ja foi criado',
    'nomeFantasia.maxLength': 'A quantidade de carateres em nome passou de 100',
    'razaoRocial.maxLength': 'A quantidade de carateres em nome passou de 100',
    'endereco.maxLength': 'A quantidade de carateres em nome passou de 100',
    'telefone.maxLength': 'A quantidade de carateres em nome passou de 100',
    'razaoRocial.minLength': 'O numero minimo carateres e 10',
    'nomeFantasia.minLength': 'O numero minimo carateres e 10',
  }
}
