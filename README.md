# 🔍 Projeto React

## 📦 Requisitos

- **Node.js** `>=20.19.0`
- **npm** `>=10.8.2` ou **Yarn** (recomendado)

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/prjalvo/BN.git
cd BN
```

Instale as dependências:

```bash
yarn
```

Inicie o projeto:

```bash
yarn start
```

## 🧰 Validações de boas práticas com Husky

### ✅ Padrão de nome de branch

Ao criar uma branch, utilize o seguinte padrão:

```
tipo/nome-da-tarefa
```

Tipos aceitos:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `chore`: Mudanças sem impacto no código (build, config)
- `docs`: Alterações na documentação
- `style`: Formatação de código (sem mudanças lógicas)
- `refactor`: Melhorias no código sem alterar funcionalidades
- `test`: Adição/alteração de testes

**Exemplo válido:** `feat/adicionar-login`

Branches protegidas: `main`, `master`, `develop`, `homolog` — não é permitido fazer commits diretos nessas branches.

### ✅ Padrão de mensagens de commit

Mensagens de commit devem seguir o padrão:

```
tipo: descrição do commit
```

**Exemplo válido:**  
```
feat: adicionar botão de login
```

Se o padrão não for seguido, o commit será bloqueado com a mensagem:

```
❌ Mensagem de commit inválida!
🔧 Use um dos prefixos permitidos: feat:, fix:, chore:, docs:, style:, refactor:, test:
💡 Exemplo: feat: adicionar botão de login
```

## 🔐 GitHub Actions - Validação do título do Pull Request

Ao abrir ou editar um Pull Request, o título será validado automaticamente para garantir que comece com um dos prefixos permitidos:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `chore`: Mudanças sem impacto no código (build, config)
- `docs`: Alterações na documentação
- `style`: Formatação de código (sem mudanças lógicas)
- `refactor`: Melhorias no código sem alterar funcionalidades
- `test`: Adição/alteração de testes

Caso o título não siga o padrão, a Action falhará com a seguinte mensagem:

```
❌ Título do Pull Request inválido.
💡 Use um dos prefixos permitidos: feat:, fix:, chore:, docs:, style:, refactor:, test:
```

