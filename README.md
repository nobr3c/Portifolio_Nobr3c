# Projeto Portfólio Full Stack + Agentes de IA - Formação DEV com Leonardo Leitão

![alt text](image-2.png)

### Ferramentas utilizadas no curso

- **[Node.js](https://nodejs.org/pt)**
- **[Visual Studio Code](https://code.visualstudio.com/)**
    - Plugins:
        - Code Runner
        - Docker
        - GitHub Copilot
        - Material Icon Theme
        - PostCSS Language Support
        - Rest Client**
        - **[Prisma](https://www.prisma.io/docs/getting-started/quickstart-sqlite)**
        - Prettier - Code formatter
        - Tailwind CSS IntelliSense
        - Sort Lines
        - Rainbow CSV
- **[Docker](https://www.docker.com/)**
    - Imagem do Docker: n8n
    - [Dockerfile](https://github.com/Saluki/nestjs-template/blob/master/Dockerfile)
- **[NestJs](https://docs.nestjs.com/)**
- **[Supabase](https://supabase.com/)**
- **[Fly.io](https://fly.io/docs/flyctl/)**
---

## Projeto

Para iniciar o projeto, navegue até a pasta **`core`** e execute o seguinte comando no terminal:


`npm init -y`

No back-end instalar de forma global com o comando `npm i -g @nestjs/cli`, para verificar os comando utilizar `nest --help`

Instalar as dependencias e criar a pasta backend utilizar o comando `nest new backend` e selecionar o gerenciador de pacote `npm` na pasta `.\Portifolio_Nobr3c`

## Teste modo DEV:

Utilizar o comando `npm run start:dev` na pasta backend

Prisma

![prismaComando](image.png)
Na pasta backend rodar o comando `npm install prisma --save-dev`

Para iniciar o Prisma utilizar o comando `npx prisma init` se for utilizar o Sqlite, utilizar o comando a seguir `npx prisma init --datasource-provider sqlite`

![alt text](image-1.png)

Rodar o comando `npx prisma migrate dev` na pasta backend, este comando ira conectar com o SupaBase e aplicar estas migrations 

Dados do Banco obtidos em [Dados](https://github.com/portfolio-projetos-dev/assets)

Criar uma conta no [N8N](https://app.n8n.cloud/register), ferramenta de integração e fluxos

Nest G = nest generate => comando

Na pasta backend rodar os comandos do nest:

- `nest g module db`

- `nest g module projeto`

- `nest g module tecnologia`

Criar uma classe para acessar o prisma através desta classe e implementar API de tecnologia:

Acessar a pasta: `cd .\src\db\`

Criar o arquivo prisma.provider: `nest g pr pisma.provider --no-spec --flat`

Acessar a pasta de tecnologia: 

- `cd ..`

- `cd .\tecnologia\`

Criar um controler e não irá criar uma outra pasta com o `--no-spec --flat`: `nest g co tecnologia --no-spec --flat`

Criar um provider dentro da pasta de `Tecnologia`:

- Acessar a pasta: `cd .\src\tecnologia`

- Comando: `nest g pr tecnologia.provider --no-spec --flat`

Na pasta de projetos com o comando: `cd..` e depois `cd .\projetos\` 

- Executar o comando: `nest g pr projeto.provider --no-spec --flat` e `nest g co projeto --no-spec --flat`

Rodar os comandos a seguir no SQL Editor do SupaBase. 

`grant usage on schema "public" to anon;`

`grant usage on schema "public" to authenticated;`

`grant all on NOME_DA_SUA_TABELA_AQUI to anon;`

`grant all on NOME_DA_SUA_TABELA_AQUI to authenticated;`

### Deploy aplicação

- Criar um `Dockerfile` na pasta `backend` do projeto, utilizar o modelo `https://github.com/Saluki/nestjs-template/blob/master/Dockerfile` como referencia

- Acrescentar os campos `COPY --from=builder --chown=node:node /home/node/prisma/ ./prisma/`

`CMD ["node", "dist/backend/src/main.js"]`

Em seguida rodar o comando na pasta `backend`:

- - `iwr https://fly.io/install.ps1 -useb | iex`
    
- - `fly launch --no-deploy` 

Para realizar o Deploy da aplicação no Fly.io, entrar na raiz do projeto e rodar o comando: `fly auth logout`

`fly auth login`

Para realizar o deploy utilizar o comando: `fly deploy`

--------------------------------------------

#### Criando o Frontend

Executar o comando na raiz do projeto `npx create-next-app@latest frontend`

![alt text](image-3.png)

Na raiz do projeto `npm init -y`

No arquivo `package.json` na raiz incluir o comando para rodar os 2 projeto `"dev": "npx concurrently  \" cd backend && npm run start:dev \" \" cd frontend && npm run dev \" "`

Na raiz do projeto executar `npm run dev`

### Componentes Carrossel:

Documentação [shadcn](ui.shadcn.com/docs/components/carousel)
    
- - **[Documentação para Instalar](https://ui.shadcn.com/docs/installation/next)**

Acessar o link e selecionar a opção do NestJs

- - Na pasta frontend executar o comando: `cd .\frontend\` e eem seguida executar o comando: `pnx shadcn@latest init` em seguida selecionar `y`

![alt text](image-4.png)

- - Utilizar a cor cinza que será o `Zinc`

![alt text](image-5.png)

- - Como o shadcn não esta totalmente compativel com o react-19 até o momento selecionar a opção `Use --force`


![alt text](image-6.png)

- Comando para instalar o Carrossel: `npx shadcn@latest add carousel`

Start na aplicação, retornar a raiz do projeto:

`cd ..`

`npm run dev`


