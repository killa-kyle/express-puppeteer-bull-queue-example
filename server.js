// server.js

import url from 'url'

import express from 'express'
import Arena from 'bull-arena'

import { queues, GET_LATEST_HN_STORIES } from './queues' // your 

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	let { count } = req.query

  // missing param ?count=
  // default to 10 posts
	if (!count) {
		count = 10
  }
  
// current timestamp in milliseconds
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();


	// add Job to Queue
	queues[GET_LATEST_HN_STORIES].add({
    count,
    title: `HackerNews posts : ${year + "-" + month + "-" + date}`
  })
	return res.send('check your console')
})

// bull queue GUI at /arena
app.use(
	'/',
	Arena(
		{
			queues: [
				{
					name: GET_LATEST_HN_STORIES,
					hostId: 'Worker',
					redis: process.env.REDIS_URL
				}
			]
		},
		{
			basePath: '/arena',
			disableListen: true
		}
	)
)

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
