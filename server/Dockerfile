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

EXPOSE 5000
CMD [ "node", "src/index.js" ]
