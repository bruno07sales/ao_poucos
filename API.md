# Integração da API

O frontend usa `VITE_API_URL` como URL-base e envia/recebe JSON. Para conectar um backend, copie `.env.example` para `.env.local`, configure a URL e defina `VITE_USE_MOCKS=false`.

Nunca coloque chaves privadas ou segredos em variáveis `VITE_*`: elas são incluídas no JavaScript entregue ao navegador.

## Autenticação

Quando existir, o access token da sessão é enviado em todas as requisições:

```http
Authorization: Bearer <token>
```

O frontend já prevê `POST /auth/login`, `GET /auth/session`, `POST /auth/refresh` e `POST /auth/logout`. A implementação futura deve manter o refresh token em cookie `HttpOnly`; nenhum segredo do banco ou chave JWT deve ser enviado ao Vue.

## Endpoints esperados

### `GET /dashboard`

```json
{
  "user": { "id": "usr_01", "name": "Cida", "points": 120, "streak": 3 },
  "progress": { "completedLessons": 3, "totalLessons": 30, "stamps": 2 },
  "mission": {
    "id": "mission_audio",
    "title": "Mande um áudio de verdade para alguém",
    "description": "No seu celular mesmo.",
    "points": 20,
    "status": "open"
  }
}
```

### `GET /levels`

Retorna uma lista de níveis. Cada nível contém `id`, `number`, `name`, `description` e `lessons`. Cada aula contém `id`, `number`, `title`, `subtitle`, `completed`, `available` e `interactive`.

### `GET /progress`

Retorna o progresso detalhado do usuário autenticado.

### `POST /lessons/:lessonId/complete`

Marca uma aula como concluída e retorna o progresso atualizado.

### `POST /missions/:missionId/complete`

Solicita ou confirma a conclusão de uma missão e retorna a missão atualizada.

## Erros

Respostas fora da faixa `2xx` devem usar, preferencialmente:

```json
{
  "message": "Descrição legível do problema",
  "code": "ERROR_CODE",
  "details": {}
}
```

O cliente possui timeout de 12 segundos e apresenta mensagens amigáveis para falhas de rede e de servidor.
