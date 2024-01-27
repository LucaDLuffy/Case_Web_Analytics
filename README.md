# Case_Web_Analytics

# Situação Problema
O projeto visa atender a uma demanda da gestão de uma concessionária multimarcas para a elaboração de um relatório de desempenho de vendas. O banco de dados enfrenta problemas de corrupção, notadamente alterações nos nomes de veículos e marcas, bem como a presença de valores de vendas em formato de string.

Recuperação dos Dados Originais do Banco de Dados
Leitura de arquivos Json:
Implementação de função para ler broken_database_1.json e broken_database_2.json.

Correção de nomes de marca e veículo:
Desenvolvimento de função para corrigir caracteres modificados.

Correção de vendas:
Criação de função para converter valores de vendas de string para número.
Exportação de arquivo JSON corrigido:

Implementação de função para exportar os dados corrigidos.
Criar Relatório de Vendas
Utilização de SQL para a criação de uma tabela única.
Importação de JSONs corrigidos para plataforma SQL online.
Exportação da tabela resultante como database.csv.

Perguntas no Relatório:
Identificação da marca com maior volume de vendas.
Levantamento do veículo que gerou a maior e menor receita.
Cálculo da média de vendas por marca.
Análise das marcas com receita elevada e baixo volume de vendas.
Exploração de possíveis relações entre os veículos mais vendidos.
Documentação
Elaboração de PDF explicativo das funções JavaScript e SQL.
Detalhamento dos procedimentos adotados para evitar inconsistências e bugs.

Entregas Esperadas
Código JS para correção.
Arquivos JSON corrigidos.
Código SQL.
Tabela database.csv.
Relatório de vendas em formato PDF.
Documentação em PDF.
