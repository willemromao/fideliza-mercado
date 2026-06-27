# ai-service

Serviço backend simples em FastAPI.

## Requisitos

- Python `3.14` ou superior
- `uv` instalado na máquina

## Configuração do ambiente

1. Entre na pasta do serviço:

```bash
cd ai-service
```

2. Instale as dependências:

```bash
uv sync
```

## Como subir o serviço

Para iniciar em modo de desenvolvimento:

```bash
uv run fastapi dev main.py
```

Para subir sem modo de desenvolvimento:

```bash
uv run fastapi run main.py
```

## Acesso

Com o serviço rodando, a API fica disponível em:

- `http://127.0.0.1:8000`

Endpoint atual:

- `GET /`

Resposta esperada:

```json
{
  "mensagem": "API configurada com sucesso usando uv!"
}
```

## Variáveis de ambiente

No estado atual do projeto, não há variáveis de ambiente obrigatórias.

Se futuramente forem adicionadas, crie um arquivo `.env` na pasta `ai-service` e documente as chaves necessárias aqui.
