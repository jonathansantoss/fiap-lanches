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
  - [🧪 Tests](#-tests)
  - [🤖 Running fiap-lanches - Kubernetes](#-running-fiap-lanches---kubernetes)

---

## 📂 Repository Structure


```sh
└── fiap-lanches/fiap-lanches-clean/
    ├── app/
    │    ├── src/
    │    │   ├── configurations/
    │    │   │   ├── DataSource.ts
    │    │   │   ├── InjectionDependency.ts
    │    │   │   ├── Swagger.ts
    │    │   │   ├── WinstonLog.ts
    │    │   ├── domain/
    │    │   │   ├── enums/
    │    │   │   │   ├── EOrderStatus.ts
    │    │   │   │   ├── EPayment.ts
    │    │   │   │   ├── EProductCategory
    │    │   │   │   ├── EPromotionStatus
    │    │   │   ├── models/
    │    │   │   │   ├── IClientModel.ts
    │    │   │   │   ├── IEmployeeModel.ts
    │    │   │   │   ├── IOrderModel.ts
    │    │   │   │   ├── IProductModel.ts
    │    │   │   │   ├── IPromotionModel.ts
    │    │   ├── repositories/
    │    │   │   ├── entity/
    │    │   │   │   ├── ClientEntity.ts
    │    │   │   │   ├── EmployeeEntity.ts
    │    │   │   │   ├── OrderEntity.ts
    │    │   │   │   ├── ProductEntity.ts
    │    │   │   │   ├── PromotionEntity.ts
    │    │   │   ├── impl/
    │    │   │   │   ├── ClientRepository.ts
    │    │   │   │   ├── EmployeeRepository.ts
    │    │   │   │   ├── OrderRepository.ts
    │    │   │   │   ├── ProductRepository.ts
    │    │   │   │   ├── PromotionRepository.ts
    │    │   │   ├── interfaces/
    │    │   │   │   ├──IClientRepository.ts
    │    │   │   │   ├──IEmployeeRepository.ts
    │    │   │   │   ├──IOrderRepository.ts
    │    │   │   │   ├──IProductRepository.ts
    │    │   │   │   ├──IPromotionRepository.ts
    │    │   ├── resources/
    │    │   │   ├── controllers/
    │    │   │   ├── midleware/
    │    │   │   ├── routers/
    │    │   │   ├── schemas/
    │    │   ├── services/
    │    │   ├── tests/
    │    │   └── index.ts
    │    ├── jest.config.js
    │    ├── package-lock.json
    │    ├── package.json
    │    └── tsconfig.json
    └── kubernates/
    │   ├── fiap-lanches-api-deployment.yaml
    │   ├── hpa.yaml
    │   ├── metrics.yaml
    │   ├── postgres-deployment.yaml
    │   ├── postgres-pv.yaml
    │   ├── postgres-pvc.yaml
    │   ├── postgres-secret.yaml
    │   ├── svc-lanches-api.yaml
    │   └── svc-postgress.yaml


```

```sh
└── fiap-lanches/fiap-lanches-hexagonal/
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
    │   fiap-lanches-api-deployment.yaml
    │   hpa.yaml
    │   metrics.yaml
    │   postgres-deployment.yaml
    │   postgres-pv.yaml
    │   postgres-pvc.yaml
    │   postgres-secret.yaml
    │   svc-lanches-api.yaml
    │   svc-postgress.yaml
    └── tsconfig.json

```

### 🧪 Tests
1. Clone the fiap-lanches repository:
```sh
git clone git@github.com:Marques0x01/fiap-lanches.git
```

2. Change to the project directory:
```sh
cd fiap-lanches/fiap-lanches-clean
```

3. Rodar os testes:
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
cd fiap-lanches-clean
cd kubernetes
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

6. Subir service do postgres:
```sh
kubectl apply -f postgres-pv.yaml   
```

7. Subir service do postgres:
```sh
kubectl apply -f postgres-pvc.yaml  
```

8. Subir deployment do postgres:
```sh
kubectl apply -f postgres-deployment.yaml
```

9. Subir service do fiap lanches:
```sh
kubectl apply -f svc-lanches-api.yaml
```

10. Subir deployment do fiap lanches:
```sh
kubectl apply -f fiap-lanches-api-deployment.yaml
```

---

[**Return**](#Top)

---