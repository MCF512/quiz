FROM node:20

WORKDIR /usr/src/quiz

COPY . .

RUN npm i
RUN npm run build

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "preview" ]