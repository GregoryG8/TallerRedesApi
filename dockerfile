FROM node:12.22.9

WORKDIR /home/greeko/Escritorio/taller

COPY package*.json ./


RUN npm install



COPY . .



EXPOSE 80

CMD [ "npm", "start" ]
