import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public qtdPedido: number

  @column()
  public livroId: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo (() => Livro)
  public livro: BelongsTo<typeof Livro>
}
