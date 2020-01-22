const CronJob = require('cron').CronJob;

module.exports = new CronJob('*/20 * * * * *', () => {
	console.log('Cron job run 20 seconds ');
});
