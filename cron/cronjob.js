const CronJob = require('cron').CronJob;
const axios = require('axios');
const Job = require('../models/job');
require('dotenv').config();

const baseUrl = process.env.FETCH_GIT_BASEURL;

module.exports = new CronJob('*/20 * * * * *', () => {
	fetchGithub();
});

const fetchGithub = () => {
	let resultCount = 1,
		onPage = 0;
	const allJobs = [];

	//fetch pages
	while (onPage != 1) {
		// const res = await fetch(`${baseUrl}?page=${onPage}`);
		// const jobs = await res.json();
		// // console.log({ jobs });
		// console.log(jobs.length);
		// resultCount = jobs.length;
		// if (resultCount > 0) {
		// 	allJobs.push(...jobs);
		// 	onPage++;
		// }

		axios
			.get(`${baseUrl}?page=${onPage}`)
			.then(res =>
				res.data.map(listing => {
					Job.create({
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
				})
			)
			.catch(error => console.log(error));

		onPage++;
	}
};
