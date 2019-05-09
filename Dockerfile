FROM node:8
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY package*.json ./
RUN npm ci
COPY ./dist ./
EXPOSE 3000
CMD npm start
