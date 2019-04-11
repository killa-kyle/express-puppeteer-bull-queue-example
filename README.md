




# Setup

- install  [foreman](https://github.com/strongloop/node-foreman) globally
- install [nodemon](https://github.com/remy/nodemon/) globally
- install [redis]() with ```brew install redis```
- start local redis with  ```redis-server```

- ```npm install```
- ```npm run dev```


# Usage
- ADD NEW JOBS: to add new jobs to queue `http://localhost:3000/?sf_id=a060L00002AMOtxQAH&name=Ronald+Halbrooks&location=NC`
- REFRESH QUEUE: `http://localhost:3000/refresh`
- VIEW QUEUE: navigate to http://localhost:3000/arena
    - username: `admin`
    - password: `P@ssw0rd!`





------
`heroku buildpacks:set jontewks/puppeteer`

`heroku redis:maxmemory redis-parallel-54745 --policy allkeys-lru`