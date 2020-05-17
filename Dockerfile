FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY . .
RUN npm install
RUN npm seed:db
RUN npm build
EXPOSE 3003
CMD ["npm", "run", "seed:db"]
CMD ["npm", "run", "build"]
CMD ["npm", "start"]
