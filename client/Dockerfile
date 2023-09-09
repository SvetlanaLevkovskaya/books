FROM node:18-alpine
WORKDIR client
COPY client/package.json ./
RUN npm i
COPY . .
CMD ["npm", "start"]
