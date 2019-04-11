// server.js

import url from 'url'

import express from 'express'
import Arena from 'bull-arena'
import { queues, GET_LATEST_HN_STORIES } from './queues'

const app = express()
const PORT = process.env.PORT || 3000
const basicAuth = require('express-basic-auth')

app.get('/', (req, res) => {
	let { count } = req.query

	// missing params
	if (!count) {
		count = 10
	}

	// add Job to Queue
	queues[GET_LATEST_HN_STORIES].add({
		count
	})
	return res.send('')
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
