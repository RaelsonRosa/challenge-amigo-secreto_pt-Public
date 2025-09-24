# Amigo Secreto

## Descrição

Este projeto é uma aplicação web simples para realizar um **Amigo Secreto**. Os usuários podem:

- Adicionar nomes de amigos em uma lista.
- Visualizar os nomes adicionados em tempo real.
- Sortear aleatoriamente um amigo secreto e exibir o resultado na tela.

O projeto é construído com **HTML, CSS e JavaScript** e utiliza um **arquivo JS externo** para organizar a lógica do programa.

---

## Funcionalidades

1. **Adicionar amigos**
   - Usuários digitam o nome do amigo em um campo de entrada.
   - Validação: não permite campos vazios.
   - Nomes válidos são adicionados a um array e exibidos em uma lista visível.

2. **Atualizar lista**
   - A lista de amigos é exibida em tempo real.
   - Cada novo amigo é adicionado sem duplicar os existentes.

3. **Sortear amigo secreto**
   - Seleciona aleatoriamente um nome do array de amigos.
   - Exibe o resultado na tela.

---

## Estrutura do Projeto

amigo-secreto/
│
├─ index.html # Estrutura da página
├─ style.css # Estilos da página
└─ app.js # Lógica JavaScript