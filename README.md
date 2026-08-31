# Aos Poucos

Aplicação de inclusão digital que ajuda pessoas idosas a usar o smartphone com mais segurança, autonomia e confiança — uma tarefa de cada vez.

O projeto reúne um frontend em Vue 3, uma experiência instalável como PWA e a fundação de uma API preparada para PostgreSQL e autenticação futura.

## Estado atual

| Área | Situação |
| --- | --- |
| Interface responsiva e acessível | Implementada |
| Níveis, aulas, prática e caderneta | Implementados com dados de demonstração |
| PWA e funcionamento offline | Implementados |
| Cliente de API e gerenciamento de sessão | Preparados |
| Backend Express e conexão PostgreSQL | Estrutura implementada |
| Migração inicial do banco | Implementada |
| Tela e endpoints de login | Próxima etapa |
| Conteúdo persistido no PostgreSQL | Próxima etapa |

> O aplicativo funciona sem backend por padrão. Quando `VITE_API_URL` não está configurada, o frontend utiliza dados locais de demonstração.

## Tecnologias

- Vue 3 e Composition API
- Vite
- PWA com service worker e web manifest
- Node.js e Express
- PostgreSQL com driver `pg`
- CSS responsivo, sem biblioteca visual externa

## Pré-requisitos

- Node.js 22 ou versão compatível com o Vite 7
- npm 10 ou superior
- PostgreSQL 15 ou superior, necessário apenas para executar a API completa

## Começando rapidamente

Instale as dependências do frontend:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse [http://127.0.0.1:4173](http://127.0.0.1:4173). Nesta modalidade, os dados simulados já estão habilitados e não é necessário configurar o PostgreSQL.

## Conectando o frontend à API

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=http://127.0.0.1:3000/v1
VITE_USE_MOCKS=false
```

Reinicie o Vite após alterar variáveis de ambiente.

Variáveis iniciadas por `VITE_` ficam visíveis no JavaScript entregue ao navegador. Nunca coloque senhas, chaves JWT ou credenciais do banco nesses valores.

O contrato de dados e os endpoints esperados estão descritos em [API.md](./API.md).

## Configurando o backend e o PostgreSQL

Instale as dependências do servidor:

```bash
cd server
npm install
```

Copie a configuração de exemplo:

```powershell
Copy-Item .env.example .env
```

Em macOS ou Linux:

```bash
cp .env.example .env
```

Configure pelo menos a conexão com o banco:

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/aos_poucos
DATABASE_SSL=false
FRONTEND_ORIGIN=http://127.0.0.1:4173
```

Crie o banco `aos_poucos`, aplique as migrações e inicie a API:

```bash
npm run db:migrate
npm run dev
```

Também é possível executar esses comandos a partir da raiz:

```bash
npm run db:migrate
npm run server:dev
```

### Verificação do servidor

| Endpoint | Finalidade |
| --- | --- |
| `GET /v1/health` | Confirma que o processo da API está ativo |
| `GET /v1/ready` | Confirma que a API consegue acessar o PostgreSQL |

O endpoint `/ready` retorna `503` enquanto o banco não estiver disponível; esse comportamento é esperado.

## Banco de dados

A migração inicial cria estruturas para:

- usuários e papéis de acesso;
- identidades de autenticação separadas do perfil;
- refresh tokens revogáveis;
- níveis e aulas;
- progresso individual;
- missões e confirmação familiar.

As credenciais foram separadas da tabela de usuários para permitir login local ou provedores externos no futuro sem remodelar os perfis existentes.

Consulte [server/README.md](./server/README.md) para o plano de autenticação e [001_initial_schema.sql](./server/migrations/001_initial_schema.sql) para o esquema completo.

## Estrutura do projeto

```text
.
├── public/                  # Manifesto, ícone e service worker publicados
├── src/
│   ├── components/          # Telas e componentes Vue
│   ├── composables/         # Estado de dados e autenticação
│   ├── data/                # Conteúdo usado no modo demonstração
│   ├── services/            # Cliente HTTP e armazenamento da sessão
│   ├── App.vue
│   └── main.js
├── server/
│   ├── migrations/          # Migrações SQL versionadas
│   ├── scripts/             # Executor de migrações
│   └── src/                 # API Express e acesso ao PostgreSQL
├── API.md                   # Contrato da API
├── manifest.webmanifest     # Fonte do manifesto PWA
└── vite.config.js
```

O arquivo `Aos Poucos.dc.html` é o protótipo navegável original e permanece no repositório como referência. A aplicação atual inicia por `index.html` e pelo código dentro de `src/`.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o frontend com atualização automática |
| `npm run build` | Gera a versão otimizada em `dist/` |
| `npm run build:pages` | Atualiza o frontend estático versionado em `docs/` |
| `npm run preview` | Serve localmente a versão de produção |
| `npm run server:dev` | Inicia a API em modo de desenvolvimento |
| `npm run server:start` | Inicia a API sem observação de arquivos |
| `npm run db:migrate` | Aplica as migrações pendentes no PostgreSQL |

## Build e PWA

Gere a versão de produção:

```bash
npm run build
npm run preview
```

Os arquivos publicáveis ficam em `dist/`. O service worker só é registrado no build de produção e requer HTTPS ou `localhost` para funcionar.

Ao alterar recursos offline, atualize a versão de `CACHE_NAME` em `public/service-worker.js` para que instalações existentes recebam o novo cache.

## Publicação no GitHub Pages

O frontend compilado para o GitHub Pages fica versionado em `docs/`. A raiz detecta o domínio `github.io` e encaminha o navegador para essa versão estática, evitando que o Pages tente executar diretamente os fontes Vue.

Antes de enviar uma alteração de frontend, atualize o build:

```bash
npm run build:pages
git add index.html docs package.json README.md
git commit -m "Atualiza frontend do GitHub Pages"
git push origin main
```

Em **Settings → Pages**, a origem pode permanecer em **Deploy from a branch**, usando a branch `main` e o diretório raiz `/ (root)`. O site público redirecionará de `/ao_poucos/` para `/ao_poucos/docs/`.

O build usa caminhos relativos. No GitHub Pages, o sistema utiliza os dados de demonstração por padrão e não depende de um servidor PostgreSQL.

O GitHub Pages hospeda somente conteúdo estático. Para habilitar login e persistência no futuro, publique a API e o PostgreSQL em outro serviço, configure `VITE_API_URL` durante o build e autorize a origem do GitHub Pages em `FRONTEND_ORIGIN`.

## Segurança e privacidade

- O frontend nunca deve acessar o PostgreSQL diretamente.
- Senhas devem ser armazenadas apenas como hashes fortes, preferencialmente Argon2id ou bcrypt.
- Refresh tokens devem usar cookies `HttpOnly`, `Secure` e `SameSite` em produção.
- Segredos pertencem exclusivamente ao `.env` do servidor.
- Arquivos `.env` locais já estão ignorados pelo Git.
- Dados pessoais e telemetria devem seguir os princípios de minimização e consentimento da LGPD.

## Próximas etapas sugeridas

1. Implementar cadastro, login, renovação e encerramento de sessão na API.
2. Criar a tela de login acessível no Vue e proteger rotas autenticadas.
3. Transferir níveis, aulas, progresso e missões dos mocks para o PostgreSQL.
4. Adicionar testes unitários, de integração e de acessibilidade.
5. Implementar recuperação de senha e confirmação de e-mail.
6. Preparar observabilidade, backups e implantação contínua.

## Documentação complementar

- [Contrato da API](./API.md)
- [Backend e autenticação futura](./server/README.md)
- [Especificação completa do produto](./Aos-Poucos-Especificacao-para-desenvolvimento.md)
