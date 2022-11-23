import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('isbn', 15).notNullable()
      table.string('titulo').notNullable()
      table.decimal('preco',10.2).notNullable()
      table.string('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.string('editor_id').unsigned().references('id').inTable('editors').notNullable()
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
