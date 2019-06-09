# URLster

Demo project inspired by TinyURL

## Local dev

In one terminal window:

1. `cd server`
2. `npm install`
3. `node src/index.js`

In another:

1. `cd client`
2. `npm install`
3. `npm start`
4. Open browser to `http://localhost:3000`

## Docker build/run

To build and run both client and server, you can do:

`docker-compose -f docker-compose.development.yaml up -d client`

You may also have to do:

`docker-compose -f docker-compose.development.yaml run client bash -c 'npm run build'`

...and re-run the client.

If you try to build the client again later, you may get errors about file permissions in the build dir; deleting the `client/build` dir on your local host machine should remedy that.
