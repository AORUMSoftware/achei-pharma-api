# Features
- CRUD Promoções
- CRUD Produtos
- CRUD Subusuários

# Insights Administrador
- O administrador deve conseguir eleger seu top 5 produtos de destaque;
- O administrador deve conseguir preencher informações sobre seu estabelecimento;
- Cada administrador possui um único estabelecimento;
- As promoções são a nível de loja física, já que não há vendas no app;
- O administrador deve poder gerenciar subcontas, concedendo acesso à features específicas para cada usuário;

# Insights Cliente
- O cliente deve poder visualizar os produtos em destaque, que são produtos eleitos de acordo com a seguinte regra de negócio:
  1. Baseado na localização do cliente e do estabelecimento em que está o produto;
  2. Quando o cliente abre o app, uma requisição para que os produtos em destaque e por localização é executada.
- O cliente deve conseguir visualizar promoções próximas a ele.
- O cliente deve visualizar um mapa com todos os estabelecimentos cadastrados;
- Se optar, o cliente deve poder visualizar uma lista ao invés de um mapa com os estabelecimentos;
- O sistema de busca pode ser por estabelecimento ou por nome/tipo de produto;

# Insights Gerais
- O produto deve ter um contador de cliques, conforme o cliente clica em um produto para visualizá-lo.
