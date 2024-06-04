FROM node:alpine

WORKDIR /client
COPY . . 

RUN npm cache clean --force
RUN npm install 
RUN npm install

CMD [ "run", "build" , "npm"]