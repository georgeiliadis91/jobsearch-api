const CronJob = require('cron').CronJob;
const axios = require('axios');
const Job = require('../models/job');
require('dotenv').config();

const baseUrl = process.env.FETCH_GIT_BASEURL;

module.exports = new CronJob('* * */1 * * *', () => {
	fetchGithub();
});

async function fetchGithub() {
	let resultCount = 1,
		onPage = 0;
	const allJobs = [];

	//fetch pages
	while (resultCount > 0) {
		await axios
			.get(`${baseUrl}?page=${onPage}`)
			.then(res => {
				resultCount = res.data.length;
				if (resultCount > 0) {
					res.data.map(async listing => {
						await Job.create({
							id: listing.id,
							type: listing.type,
							url: listing.url,
							created_at: listing.created_at,
							company_url: listing.company_url,
							location: listing.location,
							title: listing.title,
							description: listing.description,
							how_to_apply: listing.how_to_apply,
							company_logo: listing.company_logo
						});
					});
				}
			})
			.catch(error => console.log(error));

		onPage++;
	}
}
