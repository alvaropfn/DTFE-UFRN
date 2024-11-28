# Desafio tecnico

## Objetivo

Desafio Técnico | Front-End
PROCESSO SELETIVO SIMPLIFICADO No 002/2024 PERFIL 1: DESENVOLVEDOR FRONT-END PLENO
Desenvolver um dashboard interativo para monitoramento de criptomoedas utilizando a API da CoinGecko, com suporte a atualização em tempo real para gráficos selecionados. O dashboard deve oferecer filtros avançados, gráficos dinâmicos e suporte a fallback offline com cache local.

## Prazo

Até as 23h59 do dia 27/11/2024, Quarta-Feira, através de envio das entregas para os seguintes emails:

- email01
- email02
- email03

## Entregas

### Entrega 1: Repositório no GitHub

- Criar e documentar o seu projeto em um repositório público do github.
- Código do projeto com estrutura organizada.
- Commits frequentes e mensagens descritivas.
- Lembre também de compartilhar o seu repositório com os seguintes emails:
  a. email01
  b. email02
  c. email03

### Entrega 2: Documentação no Readme.md

- Descrição do projeto, como instalar, configurar e executar.
- Explicação sobre os gráficos implementados e como funcionam os filtros e o cache.

### Entrega 3: Código-Fonte

- Componentes de interface e integração com ApexCharts.
- Implementação de cache no Local Storage.

### Entrega 4: UX e Gráficos

- Implementação de 6 gráficos interativos, sendo 3 com atualização em tempo real.
- Mecanismo de pooling requests com feedback visual para atualizações.

### Requisitos

#### Req.1:Linguagem e Framework:

Livre escolha

#### Req.2: Biblioteca de Gráficos:

https://apexcharts.com/

#### Req.3: Armazenamento Local:

Local Storage para cache dos dados.

#### Req.4: Pooling:

Implementar requisições periódicas para gráficos de tempo real.

#### Req.5: Especificações gerais do Dashboard:

##### 5.1 Filtros Gerais

- Por Data:
  - Intervalo selecionável pelo usuário (últimos 7 dias, 30 dias, 90
    dias).
- Por Moeda de Cotação:
  - Exibir dados em diferentes moedas (USD, EUR, etc.).
- Por Nome da Criptomoeda:
  - Permitir busca por criptomoedas específicas.

##### 5.2 Help Section

- Cada visualização deve conter um help (?) explicando como interpretar o gráfico.

##### 5.3 Atualização em Tempo Real

- Para gráficos de tempo real, implemente pooling requests com taxas de atualização configuráveis (Opções para o usuário: 5 segundos, 30 segundos, 1 minuto e 5 minutos).

- Garanta uma experiência fluida durante a atualização (ex.: animações ao atualizar os gráficos).

##### 5.4 Cache Local

- Armazenar os dados mais recentes no Local Storage.
- Exibir um indicador visual informando que os dados apresentados
  estão no cache quando a API estiver offline.

##### 5.5 Responsividade

- Interface funcional e visualmente agradável em dispositivos desktop, tablet e mobile.

##### 5.6 Experiência do Usuário (UX)

- Feedback visual durante o carregamento dos gráficos (spinners ou placeholders).
- Mensagens amigáveis em caso de erro (ex.: "Não foi possível carregar os dados da API").
- Atualização suave nos gráficos ao atualizar dados (para evitar saltos/glitch nos valores).

##### 5.7 Acessibilidade

- Garantir que o dashboard seja acessível, incluindo legendas claras nos gráficos e suporte para navegação por teclado.

#### Req.6: Gráficos e informações a serem implementados

O dashboard deve conter 6 gráficos, sendo 3 deles em tempo real. Abaixo seguem as sugestões de gráficos, o propósito de cada um, e os respectivos endpoints disponíveis na CoinGecko.
Note que que os detalhes abaixo servem como referência mas podem ser incrementados ou modificados de acordo com sua necessidade, dede que continue atendendo as características fundamentais dos requisitos. Caso sejam necessárias adaptações ou mudanças, suas decisõesd devem ser devidamente documentadas.

##### 6.1 Gráficos em Tempo Real (Atualização com Pooling Requests)

###### Gráfico 1: Preço Atualizado de uma Criptomoeda

- Propósito: Monitorar o preço em tempo real de uma criptomoeda específica.
- Sugestão de Gráfico: Gráfico de Linhas (Zoomable Timeseries).
- Sugestão de API:
  - [https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers](https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers)
- Exemplo de Uso: Atualizar o preço do Bitcoin a cada 5 segundos.

###### Gráfico 2: Volume Atualizado em Tempo Real

- Propósito: Exibir o volume de negociação em tempo real.
- Sugestão de Gráfico: Gráfico de Linhas (Stepline).
- Sugestão de API:
  ■ [https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers](https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers)
- Exemplo de Uso: Monitorar o volume diário do Ethereum.

###### Gráfico 3: Variação Percentual ao Vivo

- Propósito: Exibir a variação percentual no preço em tempo real.
- Sugestão de Gráfico: Gráfico Candlestick ( Candlestick synced with
  a brush chart).
- Sugestão de API:
  - [https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers](https://docs.coingecko.com/v3.0.1/reference/coins-id-tickers)
- Exemplo de Uso: Mostrar as variações do Solana.

##### 6.2 Gráficos Não-Real-Time (Baseados em Dados Estáticos)

###### Gráfico 4: Histórico de Preços de uma Criptomoeda

- Propósito: Mostrar a evolução do preço de uma criptomoeda ao longo do tempo.
- Sugestão de Gráfico: Gráfico de Linhas (Zoomable Timeseries).
- Sugestão de API:
  - [https://docs.coingecko.com/v3.0.1/reference/coins-id-market-chart](https://docs.coingecko.com/v3.0.1/reference/coins-id-market-chart)
- Exemplo de Uso: Exibir o histórico do Bitcoin nos últimos 30 dias.
- Exemplo de Uso: Exibir o histórico do Bitcoin nos últimos 30 dias.

###### Gráfico 5: Comparação de Market Cap

- Propósito: Comparar o valor de mercado de diferentes criptomoedas.
- Sugestão de Gráfico: Slope Chart (Multi groups).
- Sugestão de API:
  - [https://docs.coingecko.com/v3.0.1/reference/coins-markets](https://docs.coingecko.com/v3.0.1/reference/coins-markets)
- Exemplo de Uso: Comparar o market cap de Bitcoin, Ethereum e Solana.

###### Gráfico 6: Moedas com Maior Valorização

- Propósito: Listar as moedas com maior alta percentual nas últimas 24 horas.
- Sugestão de Gráfico: Slope Chart (Basic).
- Sugestão de API:
  - [https://docs.coingecko.com/v3.0.1/reference/coins-markets](https://docs.coingecko.com/v3.0.1/reference/coins-markets)
- Exemplo de Uso: Exibir as 5 criptomoedas com maior valorização.

#### Req.7: Requisitos Arquiteturais e Estruturais

- Estrutura Sugerida do Projeto

```
src/
  components/
    charts/ # Componentes para gráficos
    filters/ # Componentes de filtros
  views/
    Dashboard # Tela principal do dashboard
  services/
    api # Lógica de comunicação com a CoinGecko API
  utils/
    cache # Funções para cache no Local Storage
public/
```

- Componentização
  - Crie componentes desacoplados, coesos e com interfaces bem
    definidas.
- Estilo e Layout
  - Utilize CSS modular ou frameworks como Tailwind CSS para garantir
    consistência visual e responsividade.

#### Req.8: Requisitos de Documentação

- Criar um **README.md** explicando:
  - Como instalar e executar o projeto localmente.
  - Como os gráficos de tempo real foram implementados.
  - Como funciona o cache local.
  - Explicação dos gráficos implementados.
- Adicionar comentários no código para detalhar a lógica de pooling e manipulação do cache.

### Informações

- API Pública (Fonte de Dados)
  - Nome: CoinGecko API
  - Documentação Oficial: CoinGecko API (note que esta é a documentação da versão demo do CoinGecko. Faça o processo de signup na versão demo conforme orienta a documentação)
  - Principais Funcionalidades providas pela API:
    - Dados de preços e market cap em tempo real de milhares de criptomoedas.
    - Informações históricas de preços para análise de tendências.
    - Dados de exchanges, incluindo volume de negociação.

### Critérios de Avaliação

- Funcionalidade:
  - Os gráficos de tempo real funcionam corretamente com pooling requests?
  - O cache local é usado adequadamente para fallback?
  - Os filtros funcionam conforme o esperado?
- Qualidade do Código:
  - Modularidade e organização do código.
  - Aplicar boas práticas de desenvolvimento para Single Page Applications.
- UX e Estética:
  - Interface responsiva e visualmente atraente.
  - Atualizações suaves e feedback claro para o usuário.
- Extras (Diferenciais):
  - Insights de informações adicionais (gráficos extras e mais dados relevantes agregados nas visualizações)
  - Implementação de animações nos gráficos.
  - Testes unitários para os componentes principais.
  - Suporte a modo escuro (dark mode).

### Informações Adicionais

O candidato que não enviar a entrega do Desafio até o prazo máximo de entrega, estará automaticamente desclassificado do processo seletivo.
