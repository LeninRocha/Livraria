import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('curso_pedido').unsigned().references('id').inTable('pedidos').notNullable()
      table.integer('curso_cliente').unsigned().references('id').inTable('clientes').notNullable()
      table.date('date_venda').notNullable()
      table.decimal('desconto_venda',10.2).notNullable()
      table.decimal('venda_cheio',10.2).notNullable()
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
