# Backend

## Banco de dados em desenvolvimento

O backend usa Postgres via `docker compose` em modo de desenvolvimento.

### 1. Configure as variáveis de ambiente

Copie `./backend/.env.example` para `./backend/.env` e ajuste se precisar.

### 2. Suba o banco

```bash
docker compose --env-file backend/.env up -d postgres
```

### 3. Rode o backend localmente

```bash
cd backend
npm install
npm run start:dev
```

### Observações

- O backend carrega `backend/.env` automaticamente via `dotenv/config`.
- O `docker compose` usa o mesmo arquivo com `--env-file backend/.env`, então não há senha hardcoded no repositório.