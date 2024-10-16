
# Sistema Techman - Manutenção de Equipamentos

O **Sistema Techman** é uma aplicação web projetada para facilitar a gestão e manutenção de equipamentos. O sistema permite o cadastro, visualização e gerenciamento de equipamentos, além de possibilitar que usuários registrem comentários sobre os equipamentos, documentando suas manutenções e observações.

## Tecnologias Utilizadas no Backend

- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL utilizando Prisma ORM
- **Seeding**: seed.js para inicialização do banco de dados

## Funcionalidades

### 1. Cadastro de Equipamentos
- Apenas usuários com o perfil de Administrador podem cadastrar novos equipamentos.
- Campos obrigatórios para cadastro:
  - Nome do equipamento
  - Endereço da imagem
  - Descrição do equipamento
  - Status (Ativo)

### 2. Listagem de Equipamentos
- Todos os usuários podem visualizar a lista de equipamentos disponíveis.
- Os equipamentos são apresentados com suas respectivas informações e botões para ação.

### 3. Comentários
- Qualquer usuário que fizer login no sistema pode visualizar e adicionar comentários aos equipamentos.
- Os comentários exibem:
  - Perfil do usuário que fez o comentário
  - Data de inclusão
  - Descrição do comentário
- Os comentários são listados em ordem de cadastro, do mais recente para o mais antigo.

### 4. Adição e Exclusão de Comentários
- Os usuários podem adicionar novos comentários através de um modal de cadastro.
- Existe um botão para excluir equipamentos, disponível apenas para administradores.

## Instruções para Execução

### Pré-requisitos
- Node.js instalado
- MySQL instalado e em execução
- Xampp instalado
- Prisma instalado globalmente (npm install prisma -g)
- Configurar um arquivo .env com a variável DATABASE_URL apontando para o banco de dados MySQL.

### Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/carla-coder/techman.git
   cd api

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure o banco de dados**:

   3.1 - Configure o arquivo `.env` com as credenciais do seu banco de dados e, em seguida, execute o comando abaixo para gerar as migrações e sincronizar o banco de dados:

   ```bash
   DATABASE_URL="mysql://root:@localhost:3306/techman"
   ```
   3.2 - Start no Xampp MySQL - Admin - Apache para abrír o phpAdmin

   3.3 - Migração e População do Banco de Dados:

   ```bash
    npx prisma migrate dev --name techman init
    ```

4. **Execute o seed para popular o banco de dados**:

   ```bash
   npx prisma db seed
   ```

5. **Iniciando o Servidor**:

  Finalmente, execute o servidor com o seguinte comando:

   ```bash
   node server.js 
   ``` 

O servidor estará disponível em http://localhost:3000.

# Frontend do Sistema Techman - Manutenção de Equipamentos

Este repositório contém o código **frontend** do Sistema Techman, responsável por fornecer a interface visual e interativa para os usuários. Ele foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript**, permitindo a gestão de equipamentos e o registro de comentários pelos usuários.

## Tecnologias Utilizadas

- **HTML5**: Estruturação das páginas e elementos do sistema.
- **CSS3**: Estilização e layout das páginas, garantindo uma interface amigável e responsiva.
- **JavaScript (ES6+)**: Funcionalidade e interatividade, incluindo chamadas a APIs, manipulação de DOM e validação de formulários.

## Estrutura de Pastas

```bash
frontend/
│
├── home/
│   ├── index.html       # Página principal - Listagem de equipamentos
│   ├── home.css         # Estilos para a página principal
│   ├── script.js        # Lógica e interações da página principal
│
├── login/
│   ├── index.html       # Página de login
│   ├── login.css        # Estilos da página de login
│   ├── script.js        # Lógica de autenticação na página de login
```

## Funcionalidades do Frontend

1. **Página de Login (login/index.html)**

- Autenticação: Os usuários fazem login através de um formulário simples.
Validação de Formulário: O campo de login exige a entrada de um e-mail e senha válidos. Caso contrário, uma mensagem de erro é exibida.

2. **Página Principal (home/index.html)**

- Listagem de Equipamentos: Exibe uma lista de todos os equipamentos cadastrados, incluindo nome, descrição, status e imagem.

- Visualização de Comentários: Ao clicar no ícone de comentários ao lado de cada equipamento, o usuário é direcionado para uma tela que exibe todos os comentários do equipamento selecionado.

- Adicionar Comentários: A página de visualização de comentários possui a funcionalidade de adicionar novos comentários através de um modal.

- Cadastro de Equipamentos: Usuários administradores têm acesso a um formulário para cadastrar novos equipamentos no sistema.

3. **Modais para Comentários e Cadastro de Equipamentos**

- Adicionar Comentários: O modal permite a inserção de um comentário para o equipamento selecionado. O botão "Cadastrar" só é ativado após o preenchimento do campo de comentário.

- Cadastro de Equipamentos: O modal de cadastro de equipamentos permite ao administrador adicionar um novo equipamento com os campos nome, imagem, descrição e status (ativo/inativo).

4. **Estilização (home/home.css, login/login.css)**

- O CSS foi utilizado para garantir um layout limpo e responsivo. As cores e os componentes seguem um design padrão para melhorar a experiência do usuário.

5. **JavaScript Funcional (home/script.js, login/script.js)**

- Requisições à API: Utiliza fetch para comunicação com o backend (Node.js e MySQL) via requisições HTTP.

- Validações de Formulário: Valida as entradas de dados para evitar erros de usuário.

- Manipulação do DOM: Atualiza dinamicamente a interface, como carregar os equipamentos e comentários sem precisar recarregar a página.

- Modais Dinâmicos: Exibe formulários de cadastro e visualização em modais que podem ser abertos e fechados conforme a interação do usuário.

## Executando o Frontend

### Pré-requisitos

- Um servidor HTTP simples pode ser utilizado para servir os arquivos HTML.

### Instruções

- Abra o arquivo index.html em seu navegador ou utilize uma extensão de servidor local como "Live Server" no VSCode para facilitar a visualização das alterações em tempo real.

### Acesse a aplicação no navegador:

- Página de Login: login/index.html
- Página Principal: home/index.html

### Exemplos de Uso

- Login de Usuário: O usuário precisa inserir sua senha com 6 dígitos para acessar a página principal.

- Navegação para Comentários: Na página principal, o usuário pode clicar no ícone de comentários para visualizar ou adicionar novos comentários ao equipamento.

- Cadastro de Equipamentos: O administrador pode acessar o formulário de cadastro através do botão "Novo Equipamento".

### Estrutura de Modais

Os modais são usados tanto para o cadastro de comentários quanto para a adição de novos equipamentos.

- Modal de Comentários: Abre ao clicar no ícone de comentários na lista de equipamentos.

- Modal de Cadastro de Equipamentos: Apenas acessível por administradores, permite o cadastro de novos equipamentos.

### Documentação das Cores e Padrões de fonte exigidas neste Sistema:


| RGB            | HEXADECIMAL | COR         |
|----------------|-------------|-------------|
| 255, 255, 255  | ffffff      | ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) |
| 238, 237, 235  | eeedeb      | ![#eedeb](https://via.placeholder.com/15/eedeb/000000?text=+) |
| 204, 226, 226  | cce2e2      | ![#cce2e2](https://via.placeholder.com/15/cce2e2/000000?text=+) |
| 179, 179, 179  | b3b3b3      | ![#b3b3b3](https://via.placeholder.com/15/b3b3b3/000000?text=+) |
| 68, 186, 188   | 44bab8      | ![#44bab8](https://via.placeholder.com/15/44bab8/000000?text=+) |
| 53, 121, 125   | 35797d      | ![#35797d](https://via.placeholder.com/15/35797d/000000?text=+) |
| 0, 0, 0        | 000000      | ![#000000](https://via.placeholder.com/15/000000/000000?text=+) |


- Para títulos a fonte deverá ser Trebuchet MS, 12 pt;

- Para os demais textos a fonte padrão deverá ser Trebuchet MS, 10 pt.
