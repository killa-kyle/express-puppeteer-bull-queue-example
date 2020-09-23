import { queues, GET_LATEST_HN_STORIES } from "./queues"
const scraper = require("./src/scraper.js")

// loop over each queue and handle
Object.entries(queues).forEach(([queueName, queue]) => {
  console.log(`Worker listening to '${queueName}' queue`)
  switch (queueName) {
    case GET_LATEST_HN_STORIES:
      queue.process(scraper)
      break
    default:
      break
  }

  queue
    .on("completed", function (job, result) {
      console.log(`${queueName} finished job:`)
      switch (queueName) {
        case GET_LATEST_HN_STORIES:
          // do something with your data here (send it off to a database etc)
          console.log(`got latest HN stories \n`, result)
          break
        default:
          break
      }
    })
    .on("failed", function (job, err) {
      console.log(`Queue - ${queueName} FAILED: \n`, err)
    })
})
