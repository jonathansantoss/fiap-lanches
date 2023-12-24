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

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📂 Repository Structure](#-repository-structure)
  - [🤖 Running fiap-lanches - Docker](#-running-fiap-lanches---docker)
  - [🧪 Tests](#-tests)
  - [🤖 Running fiap-lanches - Kubernetes](#-running-fiap-lanches---kubernetes)
  - [🤖 Running fiap-lanches - helm Local](#-running-fiap-lanches---helm-local)
  - [🤖 Running fiap-lanches - helm repository](#-running-fiap-lanches---helm-repository)

---

## 📂 Repository Structure

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

### 🤖 Running fiap-lanches - Docker
1. Clone the fiap-lanches repository:
```sh
git clone https://gitlab.com/jonathan.gomess1/fiap-lanches
```

2. Change to the project directory:
```sh
cd fiap-lanches
```

3. Run with docker:
```sh
docker compose up
```

### 🧪 Tests
```sh
npm test
```

---

### 🤖 Running fiap-lanches - Kubernetes
1. Clone the fiap-lanches repository:
```sh
git clone https://gitlab.com/jonathan.gomess1/fiap-lanches
```

2. Change to the project directory:
```sh
cd fiap-lanches
```

3. subir as metricas:
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
1. Add repository metrics-server:
```sh
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/
```

2. Install chart metrics-server:
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

### 🤖 Running fiap-lanches - helm repository
1. Add repository metrics-server:
```sh
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/
```

2. Install chart metrics-server:
```sh
helm install my-metrics-server metrics-server/metrics-server --version 3.11.0
```

3. Add repository postgres-fiap-lanches:
```sh
helm repo add postgres-fiap-lanches https://jonathansantoss.github.io/postgres-fiap-lanches
```

4. Install chart postgres-fiap-lanches:
```sh
helm install svc-postgres postgres-fiap-lanches/svc-postgres --version 0.1.0
```

5. Add repository fiap-lanches:
```sh
helm repo add fiap-lanches https://jonathansantoss.github.io/fiap-lanches-helm
```

6. Install chart fiap-lanches:
```sh
helm install fiap-lanches fiap-lanches/fiap-lanches --version 0.1.0
```

---

[**Return**](#Top)

---