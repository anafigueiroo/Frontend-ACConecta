# Frontend do ACConecta

## Configurar o ambiente de desenvolvimento

git branch https://github.com/anafigueiroo/Frontend-ACConecta.git

## Instalar as dependências do projeto

```bash
# npm
npm install

## Colocar a aplicação para rodar no servidor local

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

## Production

Build the application for production:

```bash
# npm
npm run build

## Criar nova branch e entrar nela

git branch -b nome_da_brach

## Entrar em branch já existente

git branch nome_da_branch

## Ver as branchs existentes

git branch

## Subir todas as mudanças no git

git add .

## Commitar as mudanças que foram feitas

git commit -m "Adiciona funcionalidade X ao projeto"

## Subir as alterações para a branch

git push

## Abrir pull request

Depois de ter commitado, abrir o github, ver a branch e abrir um pull request para mergear com a branch, inserindo uma descrição do que foi feito

## Para rodar a aplicação usando docker

docker-compose up --build
