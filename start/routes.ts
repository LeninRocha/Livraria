

import Route from '@ioc:Adonis/Core/Route'

Route.resource('/categoria', 'CategoriasController').apiOnly()
Route.resource('/clientes', 'ClientesController').apiOnly()
Route.resource('/editoras', 'EditorasController').apiOnly()
Route.resource('/livros', 'LivrosController').apiOnly()
Route.resource('/pedidos', 'PedidosController').apiOnly()
Route.resource('/vendas', 'VendasController ').apiOnly()
