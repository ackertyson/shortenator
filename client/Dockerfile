FROM node:10

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/
COPY package-lock.json $HOME/
RUN chown -R app:app $HOME

USER app
WORKDIR $HOME
RUN npm install --production
COPY . $HOME/
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "serve" ]
