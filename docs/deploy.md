# Deploy na EC2

Este guia assume que:

- o repositório já está clonado em `/home/ubuntu/fideliza-mercado`
- o frontend é servido pelo nginx em `/var/www/fideliza-frontend`
- o backend Nest roda como serviço `systemd` em `3000`
- o PostgreSQL já está rodando na EC2

## Depois de conectar por SSH

```bash
cd /home/ubuntu/fideliza-mercado
git pull origin main
```

## Frontend

```bash
cd /home/ubuntu/fideliza-mercado/frontend
npm install
npm run build
sudo rsync -a --delete dist/ /var/www/fideliza-frontend/
```

## Backend

```bash
cd /home/ubuntu/fideliza-mercado/backend
npm install
npm run build
sudo systemctl restart fideliza-backend
```

## Verificação

```bash
sudo systemctl status fideliza-backend --no-pager -l
curl -I http://127.0.0.1/
curl -I http://127.0.0.1/api
curl -I http://127.0.0.1/backend
```

## Se o backend não subir

Verifique se o PostgreSQL está ativo:

```bash
sudo docker ps
```

Se necessário, reinicie o container:

```bash
sudo docker restart fideliza-mercado-postgres
sudo systemctl restart fideliza-backend
```
