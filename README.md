# VetClinic

Este é um sistema de gerenciamento de pets, onde você pode cadastrar tutores e seus respectivos pets. O sistema permite criar, atualizar, listar e excluir tutores e pets.

## Configuração do ambiente

Siga as instruções abaixo para configurar e executar o projeto:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org).

2. Clone este repositório para o seu ambiente local:

3. Navegue até o diretório do projeto:


4. Instale as dependências do projeto executando o seguinte comando:

   ```
   npm install
   ```

## Executando o projeto

Para executar o projeto, siga as etapas abaixo:

1. Compile o código TypeScript para JavaScript executando o seguinte comando:

   ```
   tsc
   ```

2. Navegue até o diretório `dist`:

   ```
   cd dist
   ```

3. Execute o seguinte comando para iniciar o servidor:

   ```
   nodemon
   ```

   Isso iniciará o servidor na porta padrão 3000.

## Uso da API

A API possui as seguintes rotas disponíveis:

- `GET /tutors`: Retorna todos os tutores cadastrados.
- `POST /tutors`: Cria um novo tutor.
- `GET /tutors/:id`: Retorna os detalhes de um tutor específico.
- `PUT /tutors/:id`: Atualiza as informações de um tutor específico.
- `DELETE /tutors/:id`: Exclui um tutor específico.
- `POST /tutors/:id/pets`: Cria um novo pet para um tutor específico.
- `PUT /tutors/:tutorId/pets/:petId`: Atualiza as informações de um pet específico de um tutor.
- `DELETE /tutors/:tutorId/pets/:petId`: Exclui um pet específico de um tutor.

Certifique-se de substituir `:id`, `:tutorId` e `:petId` pelos valores corretos ao fazer as requisições.

## Contribuição

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Eu não tenho muito domínio sobre a estruturação do projeto ou tipos de estruturas melhores que a usadas. Redução de código ou qualquer outra melhoria no mesmo.
