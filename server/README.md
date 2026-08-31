# Backend e PostgreSQL

Esta pasta contém a fundação da API. O frontend não acessa o PostgreSQL diretamente; toda leitura e alteração passa por endpoints autenticados da API.

## Preparação local

1. Crie um banco PostgreSQL chamado `aos_poucos`.
2. Copie `.env.example` para `.env` e ajuste `DATABASE_URL`.
3. Instale as dependências com `npm install` nesta pasta.
4. Execute `npm run db:migrate`.
5. Inicie a API com `npm run dev`.

Verificações:

- `GET /v1/health`: processo da API ativo.
- `GET /v1/ready`: API e PostgreSQL disponíveis.

## Próxima etapa de autenticação

1. Implementar `POST /v1/auth/login` com comparação de hash Argon2id ou bcrypt.
2. Emitir access token curto e refresh token rotativo.
3. Salvar somente o hash do refresh token em `refresh_tokens`.
4. Preferir refresh token em cookie `HttpOnly`, `Secure` e `SameSite`.
5. Implementar `GET /v1/auth/session`, `POST /v1/auth/refresh` e `POST /v1/auth/logout`.
6. Aplicar middleware de autorização por papel (`student`, `family`, `instructor`, `admin`).

O frontend já possui os métodos correspondentes e uma store de sessão em `src/composables/useAuth.js`.
