# BACKEND

## Tecnologias:

### Express
### Knex.js
### Nodemon
### Cors 
### Crypto


# Banco de Dados Relacional utilizando Knex.js
## SQLite3

# Estrategias

### Foi escolhido o SQLite3 por ser um banco mais leve. Contudo, ele atende nossa necessidade de armazenar os dados

### Com o knex é possivel usar as migrations e com mais facilidade podemos mudar o SGBD do nosso backend. Poís não precisarei criar SQL de forma tradicional, mas sim usando a sintaxe do JavaScript.

### Biblioteca crypto para gerar o id das ongs. Desta forma será gerado 4 bytes de caracteres hexadecimais (Assim deixará a ong mais segura na hora de logar).

### Para criar as rotas foi usado o software INSOMNIA.

# Padrão MVC e REST

## Abstrair do arquivo ROUTE toda a logica de cadastrar e listar as ONG´s e Incidents. A logica está na pasta controllers.

## Criamos uma API RESTFUL utilizando a semantica dos metodos HTTP.


# FRONTEND

## Sistema de rotas feito com react-router-dom

## Cliente HTTP escolhido para fazer a chamada da API do backend foi o AXIOS.











































