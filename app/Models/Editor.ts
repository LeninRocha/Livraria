import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Editor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public isbn: number
  @column()
  public titulo: string

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}