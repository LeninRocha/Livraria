import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Editor from './Editor'
import Categoria from './Categoria'
import Pedido from './Pedido'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public isbn: string

  @column()
  public titulo: string

  @column()
  public preco: number

  @column()
  public categoriaId: number

  @column()
  public editoraId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo (() => Editor)
  public editor: BelongsTo<typeof Editor>


  
  @belongsTo (() => Categoria)
  public categoria: BelongsTo<typeof Categoria>

  @hasMany (()=> Pedido)
  public pedido: HasMany<typeof Pedido>
}
