


## 1 click deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy?template=https://github.com/killa-kyle/express-puppeteer-bull-queue-example)


# Setup

- install  [foreman](https://github.com/strongloop/node-foreman) globally
- install [nodemon](https://github.com/remy/nodemon/) globally
- install [redis]() with ```brew install redis```
- install project dependencies with ```npm install```

- start local redis with  ```redis-server```
- in new terminal start project with:
  - ```npm run start:dev``` will start both server & worker process for dev


# Usage
- ADD NEW JOBS: to add new jobs to queue `http://localhost:3000/`
- VIEW QUEUE: navigate to http://localhost:3000/arena






------
can be deployed to heroku 
`heroku buildpacks:set jontewks/puppeteer`

`heroku redis:maxmemory redis-parallel-54745 --policy allkeys-lru`