FROM node:16.14-alpine
## Imagem node: versão

WORKDIR /app-backend
## Definir diretório de trabalho

COPY package* ./
## Copiando os arquivos package.json e package-lock.json

RUN npm install
## Instalando as dependências

COPY . .
## Copiando arquivos e diretórios para dentro do container

EXPOSE 3001
## Expondo a porta 3001

CMD ["npm", "start"]
## Startando a aplicação