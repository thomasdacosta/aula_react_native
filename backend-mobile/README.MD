# Template para um Backenb Mobile

Template desenvolvido em Spring Boot 3 para o backend de um aplicativo mobile.

## Endpoints

Aplicativo é dividido nos seguintes endpoints:

- **Usuarios**:
  - **POST - /usuarios/login** - login do usuário
  - **POST - /usuarios/cadastro** - cadastro de um novo usuário 
  - **GET - /usuarios** - lista de usuários cadastrados
- **Produtos**:
  - **GET - /produtos** - lista de produtos 
  - **GET - /produtos/{id}** - detalhe de um produto
- **Pedidos**:
  - **POST - /pedidos** - criar um pedido
  - **GET - /pedidos** - listar os pedidos
  - **GET - /pedidos/{id}** - detalhe de um pedido

É possivel complementar o backend com mais endpoints para deixar o seu aplicativo mobile mais completo.

