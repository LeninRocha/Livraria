import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cursoPedido: number 
  
  @column()
  public cursoCliente: number

  @column()
  public dateVenda: number

  @column()
  public descontoVenda: number

  @column()
  public VendaCheia: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
