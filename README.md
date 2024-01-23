<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>FIAP-LANCHES</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat-square&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat-square&logo=Nodemon&logoColor=white" alt="Nodemon" />

<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat-square&logo=ts-node&logoColor=white" alt="tsnode" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Conteudo
- [📖 Conteudo](#-conteudo)
- [✨ Objetivos](#-objetivos)
- [📜 Arquitetura](#-arquitetura)
- [🌐 Swagger - API Coleção](#-swagger---api-coleção)
- [📂 Estrutura do Repositório](#-estrutura-do-repositório)
  - [🤖 Executando fiap-lanches - Docker](#-executando-fiap-lanches---docker)
  - [🧪 Testes](#-testes)
  - [🤖 Executando fiap-lanches - Kubernetes](#-executando-fiap-lanches---kubernetes)
  - [🤖 Executando fiap-lanches - helm Local](#-executando-fiap-lanches---helm-local)
  - [🤖 Executando fiap-lanches - helm repository](#-running-fiap-lanches---helm-repository)

---

## ✨ Objetivos

O FiapLanches foi um grande sucesso, e com esse sucesso surgiu a necessidade de expansão. No entanto, foram identificados problemas com o atendimento ao cliente e o gerenciamento de pedidos.

Sem um sistema de gerenciamento de pedidos, pode haver confusão entre os atendentes e a cozinha, resultando em atrasos na preparação e entrega de pedidos. Pedidos podem ser perdidos, interpretados erroneamente ou esquecidos, o que leva à insatisfação do cliente e possíveis perdas de negócios.

Como solução, é necessário um sistema de gerenciamento de pedidos para garantir que o estabelecimento possa atender os clientes de forma eficiente, gerenciando seus pedidos e estoques adequadamente.

Para resolver esse problema, este repositório foi criado com a intenção de ser um sistema de autosserviço e gerenciamento de fast food que oferece facilidade para os clientes fazerem e receberem seus pedidos. Ele também auxilia os funcionários no gerenciamento desses pedidos, permitindo o controle sobre estratégias de marketing e o gerenciamento de funcionários.

## 📜 Arquitetura

![Fiap Lanches Arquitetura](others/architecture/architecture_v1.jpeg)

## 🌐 Swagger - API Coleção

[API Coleção](others/api_collection/fiapLanchesEndpointCollections.json) or ou depois de rodar o projeto acesse o swagger: [Swagger](http://localhost:3000/api-docs/)

## 📂 Estrutura do repositório

```sh
└── fiap-lanches/
    ├── Dockerfile
    ├── docker-compose.yml
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── adapter/
    │   │   ├── driven/
    │   │   └── driver/
    │   ├── config/
    │   │   ├── DataSource.ts
    │   │   ├── RedisConfig.ts
    │   │   ├── Swagger.ts
    │   │   └── WinstonLog.ts
    │   ├── core/
    │   │   ├── applications/
    │   │   └── domain/
    │   ├── shared/
    │   │   └── container/
    │   └── test/
    │       ├── client/
    │       ├── employee/
    │       ├── order/
    │       ├── payment/
    │       └── product/
    └── tsconfig.json

```

### 🤖 Executando fiap-lanches - Docker
1. Clone the fiap-lanches repository:
```sh
git clone https://gitlab.com/jonathan.gomess1/fiap-lanches
```

2. Mudar pasta do projeto:
```sh
cd fiap-lanches
```

3. Rodar com docker:
```sh
docker compose up
```

### 🧪 Testes
```sh
npm test
```

---

### 🤖 Executando fiap-lanches - Kubernetes
1. Clone o repositório fiap-lanches:
```sh
git clone https://gitlab.com/jonathan.gomess1/fiap-lanches
```

2. Mudar pasta do projeto:
```sh
cd fiap-lanches
```

3. Subir as metricas:
```sh
kubectl apply -f metrics.yaml
```

4. Subir secrets do postgres:
```sh
kubectl apply -f postgres-secret.yaml
```

5. Subir service do postgres:
```sh
kubectl apply -f svc-postgress.yaml
```

6. Subir deployment do postgres:
```sh
kubectl apply -f postgres-deployment.yaml
```

7. Subir service do fiap lanches:
```sh
kubectl apply -f svc-lanches-api.yaml
```

8. Subir deployment do fiap lanches:
```sh
kubectl apply -f fiap-lanches-api-deployment.yaml
```

9. Subir hpa do fiap lanches:
```sh
kubectl apply -f hpa.yaml
```

---

### 🤖 Running fiap-lanches - helm Local
1. Adicione repository metrics-server:
```sh
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/
```

2. Instale o chart metrics-server:
```sh
helm install my-metrics-server metrics-server/metrics-server --version 3.11.0
```

3. Acessar a pasta helm/postgres-helm/:
```sh
cd helm/postgres-helm/
```

4. Gerar o pacote com helm:
```sh
helm package postgres-fiap-lanches   
```

5. Fazer instalação do postgres-fiap-lanches:
```sh
helm install postgres-fiap-lanches ./docs/postgres-fiap-lanches-0.1.0.tgz  
```

6. Acessar a posta helm/fiap-lanches-helm/:
```sh
cd helm/fiap-lanches-helm/
```

7. Gerar o pacote com helm:
```sh
helm package fiap-lanches   
```

8. Fazer instalação do fiap-lanches:
```sh
helm install fiap-lanches ./docs/fiap-lanches-0.1.0.tgz  
```

---

### 🤖 Executando fiap-lanches - helm repository
1. Adicione o repositório metrics-server:
```sh
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/
```

2. Intale o chart metrics-server:
```sh
helm install my-metrics-server metrics-server/metrics-server --version 3.11.0
```

3. Adicione o repositório postgres-fiap-lanches:
```sh
helm repo add postgres-fiap-lanches https://jonathansantoss.github.io/postgres-fiap-lanches
```

4. Instale o chart postgres-fiap-lanches:
```sh
helm install svc-postgres postgres-fiap-lanches/svc-postgres --version 0.1.0
```

5. Adicione o repositório fiap-lanches:
```sh
helm repo add fiap-lanches https://jonathansantoss.github.io/fiap-lanches-helm
```

6. Intale o chart fiap-lanches:
```sh
helm install fiap-lanches fiap-lanches/fiap-lanches --version 0.1.0
```

---

[**Return**](#Top)

---
