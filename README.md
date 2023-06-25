# Projeto de Exemplo AngularJS

Bem-vindo ao *Projeto de Exemplo AngularJS*! Este é um projeto simples criado para demonstração de conceitos básicos do AngularJS.

Este projeto foi desenvolvido em 5 horas e não foi revisado por pares, portanto é natural que possua alguns pequenos bugs.

## Foco

- O objetivo deste projeto é apresentar conceitos importantes do AngularJS, como componentes, controllers, rotas e organização de arquivos por responsabilidades. 
- O código foi desenvolvido com foco na semântica e facilidade de revisão por parte dos interessados.
- O projeto está organizado da seguinte forma:
    - Pasta "Pages" se encontra o HTML dos componentes que serão utilizados
    - Pasta "assets/js/controllers" arquivos js com as controllers de cada componente. Ele são carregados automaticamente quando criados nessa página.¹

¹ - o arquivo controllers-loader.js é o responsável por ler o conteúdo dessa pasta e carregar para a memória da aplicação. Para que esse efeito seja obtivo é essencial que seu gerenciador de serviço web permita a leitura do conteúdo de pastas. Veja em detalhe o exemplo de uma configuração feita no NGInx.

## Versões
- JQuery: 1.12.4
- AngularJS: 1.7.9
- Bootstrap: 3.4.1

## Funcionalidades

O projeto possui as seguintes funcionalidades:

1. Cadastro de Pessoas:
   - O usuário pode cadastrar informações básicas de pessoas, como nome, idade e cidade.
   - As pessoas cadastradas são exibidas em uma lista.

2. Cadastro de Funções:
   - O usuário pode cadastrar funções, incluindo um ID, nome e idade mínima.
   - É possível associar pessoas às funções, exibindo as pessoas selecionadas.

## Configuração do NGINX para Execução do Projeto

O NGINX é um servidor web popular e de alto desempenho que pode ser usado para hospedar aplicativos web estáticos e dinâmicos. Nesta seção, vou descrever detalhadamente como configurar o NGINX para executar o projeto de exemplo do AngularJS.

### Passo 1: Instalação do NGINX

Primeiro, você precisa fazer o download e instalação do NGINX no seu sistema. Você pode encontrar as instruções de instalação adequadas para o seu sistema operacional na documentação oficial do [NGINX](https://nginx.org).

### Passo 2: Edição do arquivo nginx.conf

Após a instalação, vamos editar o arquivo de configuração `nginx.conf`. Este arquivo geralmente está localizado em `/etc/nginx/nginx.conf` ou `/usr/local/nginx/conf/nginx.conf`, dependendo da sua instalação.

Abra o arquivo `nginx.conf` em um editor de texto de sua escolha.

### Passo 3: Adição das Configurações no bloco `http`

Dentro do arquivo `nginx.conf`, localize o bloco `http` e adicione as seguintes linhas:

    ```nginx
    http {
        ...
        charset utf-8;
        autoindex on;
        ...
        server {
            listen 8080;
            server_name localhost;
            root <caminho da pasta do arquivo index.html>;
            index index.html;

            location / {
                try_files $uri $uri/ /index.html;
            }
        }
        ...
    }
    ```

## Contribuições

Se você tem sugestões ou melhorias para este projeto, ficarei feliz em receber suas contribuições. Envie suas sugestões e melhorias para o seguinte e-mail: [leamorim@outlook.com](mailto:leamorim@outlook.com).

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT). Sinta-se à vontade para utilizar, modificar e distribuir o código de acordo com os termos da licença.

## Contato

Para mais informações ou dúvidas sobre o projeto, entre em contato pelo e-mail: [leamorim@outlook.com](mailto:leamorim@outlook.com).

Agradecemos seu interesse e contribuições!
