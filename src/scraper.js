const puppeteer = require('puppeteer')

/******************************************************************
* kick off scrape action
* 
******************************************************************/
const Scraper = async (job) => {
	if (!job) {
		return Promise.resolve(null)
	}

	const { count } = job.data // example query value passed to job
	console.log('count is ' + count)
	// start browser
	const browser = await puppeteer.launch({
		headless: true,
		// devtools: true,
		ignoreHTTPSErrors: true,
		args: [ '--no-sandbox', '--disable-setuid-sandbox' ]
	})

	// get latest HN Posts
	const HNPostResults = await getHNPosts(count)

	// return result
	return HNPostResults

	/******************************************************************
    * step 1 : check for doctor with matching name / location
    ******************************************************************/

	async function getHNPosts(count) {
		const url = `https://news.ycombinator.com/`
		const page = await browser.newPage()
		await page.goto(url, { waitUntil: 'networkidle2' })		

		page.on('console', (msg) => console.log(msg))

		const results = await page.evaluate(async (count) => {
            let HNlinks = Array.from(document.querySelectorAll('.storylink'))



			// return our search results
            return HNlinks.map(link => {
                return {
                    title: link.innerText,
                    href: link.href
                }
            })

		}, count) // pass variable into execution context
		await page.close()

		return results
	}
}

module.exports = Scraper
