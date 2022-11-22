import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, DateTimeColumnDecorator } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'
import Cliente from './Cliente'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pedidoId: number 
  
  @column()
  public clienteId: number

  @column()
  public dateVenda: DateTime

  @column()
  public descontoVenda: number

  @column()
  public VendaCheia: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Pedido)
  public pedido: BelongsTo<typeof Pedido>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

}
