import { queues, GET_LATEST_HN_STORIES } from './queues'
const scraper = require('./src/scraper.js')

// loop over each queue and handle
Object.entries(queues).forEach(([ queueName, queue ]) => {
	console.log(`Worker listening to '${queueName}' queue`)
	switch (queueName) {
		case GET_LATEST_HN_STORIES:
			queue.process(scraper)
            break
        default:
            break        
	}

	queue
		.on('completed', function(job, result) {
			console.log(`${queueName} finished job: \n`, result)			
			switch (queueName) {
				case GET_LATEST_HN_STORIES:
                    console.log(`got latest HN stories`)
					break
				default:
					break
			}
		})
		.on('failed', function(job, err) {
			console.log(`Queue - ${queueName} FAILED: \n`, err)
		})
})
