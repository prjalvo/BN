# Usamos a imagem oficial do Node com a versão correta
FROM node:20.19.0

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência do Yarn
COPY package.json yarn.lock ./

# Instala as dependências com Yarn
RUN yarn install

# Copia o restante do código
COPY . .

# Expondo a porta padrão do React
EXPOSE 3000

# Comando padrão para iniciar o app
CMD ["yarn", "start"]
