import Queue from 'bull'

const { REDIS_URL } = process.env

export const GET_LATEST_HN_STORIES = 'GET_LATEST_HN_STORIES'


export const queues = {
	[GET_LATEST_HN_STORIES]: new Queue(GET_LATEST_HN_STORIES, REDIS_URL)
}
