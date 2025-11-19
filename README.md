# Sistema de Gestão de Motéis (SGM)

Backend desenvolvido em Node.js com Express para gerenciamento de operações de hotéis, incluindo check-in, check-out e controle de ocupação de quartos.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
Backend-Gerenciamento-de-Hotel/
├── node_modules/          # Dependências do projeto
├── src/
│   ├── controllers/       # Controllers - lógica de controle das requisições
│   │   └── ocupacao.controller.js
│   ├── dto/              # Data Transfer Objects - validação de dados
│   │   └── checkIn.dto.js
│   ├── services/         # Camada de serviço - lógica de negócio
│   │   └── checkIn.service.js
│   └── routes/           # Definição das rotas da API
│       └── ocupacao.routes.js
├── .env                  # Variáveis de ambiente (não versionado)
├── .gitignore           # Arquivos ignorados pelo Git
├── package.json         # Configurações e dependências do projeto
├── README.md           # Documentação do projeto
└── server.js          # Ponto de entrada da aplicação
```

## 🚀 Como Foi Feito

### 1. Inicialização do Projeto
```bash
npm init -y
```

### 2. Instalação das Dependências
```bash
npm install express dotenv
```

### 3. Configuração da Estrutura
- Criação da estrutura de pastas (src/controllers, src/routes, src/services, src/dto)
- Configuração do arquivo `.env` com variáveis de ambiente
- Criação do `.gitignore` para proteção de arquivos sensíveis

### 4. Implementação da Arquitetura em Camadas
- **server.js**: Configuração do servidor Express e middlewares
- **Routes**: Definição dos endpoints da API
- **Controllers**: Manipulação de requisições HTTP
- **DTOs**: Validação e formatação de dados de entrada
- **Services**: Lógica de negócio (com implementação mockada)

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/gradinguilherme/Backend-Gerenciamento-de-Hotel.git
cd Backend-Gerenciamento-de-Hotel
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto (ou renomeie `.env.example`):
```env
PORT=8080
```

4. **Inicie o servidor**
```bash
npm start
```

O servidor estará disponível em `http://localhost:8080`

## 📡 Endpoints Disponíveis

### Rota de Teste
- **GET** `/` - Verifica se a API está online

**Resposta:**
```json
{
  "status": "success",
  "mensagem": "Sistema de Gerenciamento de Hotel - API Online",
  "versao": "0.1.0"
}
```

### Check-in
- **POST** `/api/ocupacao/check-in` - Realiza check-in de um hóspede

**Corpo da Requisição:**
```json
{
  "quarto_id": "101",
  "placa": "ABC-1234"
}
```
*Nota: Também aceita `quartoId` e `placaVeiculo` (compatibilidade)*

**Resposta de Sucesso (201):**
```json
{
  "status": "success",
  "mensagem": "Check-in realizado com sucesso",
  "dados": {
    "id": 6790,
    "quarto_id": "101",
    "placa": "ABC-1234",
    "data_check_in": "2025-11-19T03:28:05.683Z",
    "status": "ativo",
    "created_at": "2025-11-19T03:28:05.683Z"
  }
}
```

**Resposta de Erro - Validação (400):**
```json
{
  "status": "error",
  "mensagem": "Dados de entrada inválidos",
  "erros": [
    {
      "field": "quarto_id",
      "message": "O campo quarto_id é obrigatório"
    },
    {
      "field": "placa",
      "message": "O campo placa é obrigatório"
    }
  ]
}
```

**Resposta de Erro - Quarto Ocupado (400):**
```json
{
  "status": "error",
  "mensagem": "Quarto não está disponível para check-in",
  "dados": null
}
```

**Validações Implementadas:**
- ✅ `quarto_id` é obrigatório (string ou número)
- ✅ `placa` é obrigatória (string)
- ✅ Formato de placa: ABC-1234 (padrão antigo) ou ABC1D23 (Mercosul)
- ✅ Verificação de disponibilidade do quarto (mockada)

## 🧪 Testando a API

### Usando cURL
```bash
# Teste de status da API
curl http://localhost:8080/

# Teste de check-in (sucesso)
curl -X POST http://localhost:8080/api/ocupacao/check-in \
  -H "Content-Type: application/json" \
  -d '{"quarto_id": "101", "placa": "ABC-1234"}'

# Teste com placa Mercosul
curl -X POST http://localhost:8080/api/ocupacao/check-in \
  -H "Content-Type: application/json" \
  -d '{"quarto_id": "105", "placa": "ABC1D23"}'

# Teste de validação (erro 400)
curl -X POST http://localhost:8080/api/ocupacao/check-in \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Usando Postman ou Insomnia
1. Importe a collection ou crie uma nova requisição
2. Configure o método como `POST`
3. URL: `http://localhost:8080/api/ocupacao/check-in`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "quarto_id": "101",
  "placa": "ABC-1234"
}
```

## 📝 Scripts Disponíveis

```bash
# Inicia o servidor em modo produção
npm start

# Inicia o servidor em modo watch (Node.js 18+)
npm run dev
```

## ✅ Checklist Rápido

Antes de começar, verifique se você completou todas as etapas:

- [ ] Node.js 14+ instalado (recomendado: versão 18 ou superior)
- [ ] Dependências instaladas (`npm install`)
- [ ] Arquivo `.env` configurado com `PORT=8080`
- [ ] Servidor iniciado (`npm start`) e acessível em `http://localhost:8080`
- [ ] Endpoint de teste respondendo (`GET /`)
- [ ] Endpoint de check-in funcionando (`POST /api/ocupacao/check-in`)

## 📚 Referências

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [DTO Pattern](https://martinfowler.com/eaaCatalog/dataTransferObject.html)


