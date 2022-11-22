import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Editor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nomeFantasia: string
  @column()
  public razaoSocial: string

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime



  @hasMany(() => Livro)
  public livro: HasMany <typeof Livro>
}
