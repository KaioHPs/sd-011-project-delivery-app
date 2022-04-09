---

# Projeto Delivery App

Projeto Full Stack desenvolvido em grupo na Trybe.
O projeto consiste no desenvolvimento de um app de compra de produtos online.

Foram concluídos 37 requisitos dos 43 requisitos obrigatórios do projeto, totalizando 86% dos requisitos obrigatórios realizados com sucesso.

---

Projeto feito em parceria com:
* [lucasSCsantos](https://github.com/lucasSCsantos)
* [marcoswarmling](https://github.com/marcoswarmling)
* [IsaacMagno](https://github.com/IsaacMagno)

---

## Instruções para inicialização local

**⚠️ Para ser rodado localmente o projeto exige a instalação do `MySQL`.**

1. Clone o repositório

- `git clone git@github.com:KaioHPs/sd-011-project-delivery-app.git`.
- Acesse o repositório do projeto:
  - `cd sd-011-project-delivery-app`

2. Instale as dependências

- Instale as dependências do front-end:
  - `cd ./front-end`
  - `npm install`

- Instale as dependências do back-end:
  - `cd ./back-end`
  - `npm install`

3. Rode o programa
- Inicie primeiro o back-end:
  - `cd ./back-end`
  - `npm run dev`

- Depois inicie o front-end:
  - `cd ./front-end`
  - `npm start`

## Acesso ao App

Existem 3 tipos de usuário `clientes`, `vendedores` e `administradores`. Cada um com acesso a uma interface diferente.
- `Clientes` podem colocar produtos no carrinho, fazer pedidos, conferir a listagem dos pedidos e acessar a página de detalhes de cada pedido.
  - Usuário cliente padrão:
    - login: `zebirita@email.com`
    - senha: `$#zebirita#$`
- `Vendedores` podem acessar a listagem dos pedidos feitos para eles, e mudar o status de envio de cada um deles.
  - Usuário vendedor padrão:
    - login: `fulana@deliveryapp.com`
    - senha: `fulana@123`
- `Administradores` podem cadastrar novos clientes, vendedores e administradores.
  - Usuário administrador padrão:
    - login: `adm@deliveryapp.com`
    - senha: `--adm2@21!!--`

## Tecnologias utilizadas
- Front-End:
  - ![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![REACT-ROUTER](https://img.shields.io/badge/React_Router-20232A?style=for-the-badge&logo=react-router&logoColor=CA4245)
- Back-End:
  - ![NODE.JS](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=43853D)
![EXPRESS.JS](https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=express&logoColor=white)
![SEQUELIZE](https://img.shields.io/badge/Sequelize-20232A?style=for-the-badge&logo=sequelize&logoColor=03AFEF)
![MySQL](https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=mysql&logoColor=white)
