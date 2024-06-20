# Dependencias
npm install react-icons --save

npm install zustand

npm i clsx
 npm install swiper
# Correr en Dev
1. Clonar el repositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias    ```   npm install   ```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev```
6. Ejecutar el seed ```npm run seed ```
7. Correr el proyecto   ```   npm run dev   ```

# Revision de Warnings para desplegar
1. ```npm run build```


npm install react-hook-form

<!-- En nuestro caso tenemos que activar en Pg admin el puerto -->
<!-- Fernando trabaja con 1 al 6  -->
<!-- Contraseña de 1 al 8 es algo que yo connfigure en PGadmin e password-->
# Correr en Prod
docker --version
docker compose up -d


npm install prisma --save-dev


npx prisma init --datasource-provider PostgreSQL

<!-- npx prisma migrate dev --name <init> -->
npx prisma migrate dev --name ProductCategory
<!-- Volver levantar -->
npx prisma migrate dev --name ProductImage

npx prisma migrate dev --name country


# Prisma
1.- Pasa de Tabla a Codigo 
npx prisma db pull

# Ejecutar TS

npm i -D ts-node

cd src/seed/
npm run seed

- crear un tsconfing para que funcione el script
npx tsc --init


# nGROOK
<!-- descomprimimos yy ejecutamos -->
<!-- autenticamos -->
ngrok config add-authtoken 2hLArUemTXmXazK42IX7Kle3o0j_kGP3pztqWJVTqX27ZLQV
<!-- ngrok http http://localhost:8080 -->
<!-- ngrok http http://localhost:3000 -->
<!-- puerto y obtenemos url-->
ngrok http 3000



<!-- juntamos la url  para ponerlo en  https://www.opengraph.xyz/url/https%3A%2F%2F3522-190-43-118-47.ngrok-free.app%2Fproduct%2Fmen_raven_lightweight_hoodie -->
https://3522-190-43-118-47.ngrok-free.app/product/men_raven_lightweight_hoodie


# NextAuth
<!-- npm install next-auth -->
npm install next-auth@beta

<!-- openssl rand -base64 32 -->

npm i zod
npm i bcryptjs

# Paypal
npm i @paypal/react-paypal-js

# Cloudinary
npm i cloudinary

<!-- Subir a Git  -->
git branch -M main
git checkout main

## Desplegar
# Base de datos  "NEON"
# Vercel
Storage>Postgresql>Creamos ```teslo-db````>Cadena de conexionen .env
Data >
<!-- Crea en la base de datos remota o de produccion -->
npx prisma migrate deploy
npm run seed

