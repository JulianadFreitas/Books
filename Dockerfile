
# define a imagem base
FROM node:14.17.0-alpine

# where docker image will be
WORKDIR /usr/src/app 

COPY ./package*.json ./next.config.js ./ 

# Install: 
    # ci - optimize the installation of dependencies/ see direct the package-lock
    # -- only=prod: ignoring all the dev dependeces 
    # --silent --no-progress: don't show the logs and progress
RUN npm ci --only=prod --silent --no-progress 

COPY ./.next ./.next 

EXPOSE 3000

CMD npm start

#roda build do next 
# npm run build
#roda imagem
#docker build -t books:1 . 

#docker run books:1 

#roda falando que a porta do docker 300 é a mesma 3000 do localhost 
#docker run -p 3000:3000 books:1
