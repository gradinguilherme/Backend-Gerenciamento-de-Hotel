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
- Criação da estrutura de pastas (src/controllers, src/routes)
- Configuração do arquivo `.env` com variáveis de ambiente
- Criação do `.gitignore` para proteção de arquivos sensíveis

### 4. Implementação da Arquitetura em Camadas
- **server.js**: Configuração do servidor Express e middlewares
- **Routes**: Definição dos endpoints da API
- **Controllers**: Lógica de negócio e manipulação de requisições

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
  "quartoId": "101",
  "placaVeiculo": "ABC-1234"
}
```

**Resposta de Sucesso (201):**
```json
{
  "status": "success",
  "mensagem": "Check-in realizado com sucesso - MOCK",
  "dados": {
    "quartoId": "101",
    "placaVeiculo": "ABC-1234"
  }
}
```

## 🧪 Testando a API

### Usando cURL
```bash
# Teste de status da API
curl http://localhost:8080/

# Teste de check-in
curl -X POST http://localhost:8080/api/ocupacao/check-in \
  -H "Content-Type: application/json" \
  -d '{"quartoId": "101", "placaVeiculo": "ABC-1234"}'
```

### Usando Postman ou Insomnia
1. Importe a collection ou crie uma nova requisição
2. Configure o método como `POST`
3. URL: `http://localhost:8080/api/ocupacao/check-in`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "quartoId": "101",
  "placaVeiculo": "ABC-1234"
}
```

## 📝 Scripts Disponíveis

```bash
# Inicia o servidor em modo produção
npm start

# Inicia o servidor em modo watch (Node.js 18+)
npm run dev
```

## 🔜 Próximos Passos

- [ ] Implementar camada de Service (lógica de negócio)
- [ ] Integração com banco de dados
- [ ] Implementar validações de dados
- [ ] Adicionar autenticação e autorização
- [ ] Implementar rotas de check-out
- [ ] Adicionar testes unitários e de integração
- [ ] Documentação com Swagger/OpenAPI

## 📄 Licença

ISC

## 👤 Autor

**gradinguilherme**

---

⭐ Desenvolvido como parte do Sistema de Gestão de Motéis