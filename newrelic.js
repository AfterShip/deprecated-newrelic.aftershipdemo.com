'use strict';

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

 const {
 	APP_NAME: APP_NAME = ''
 } = process.env;
 
 const {
        NEW_RELIC_LICENSE_KEY: NEW_RELIC_LICENSE_KEY = ''
 } = process.env;

exports.config = {
	/**
	 * Array of application names.
	 */
	app_name: [`${APP_NAME}`],

	/**
	 * Your New Relic license key.
	 */
	license_key: [`${NEW_RELIC_LICENSE_KEY}`],

	distributed_tracing: {
		enabled: true,
	},

	error_collector: {
		enabled: true,
//		ignore_status_codes: ['405']
	},

	logging: {
		/**
		 * Level at which to log. 'trace' is most useful to New Relic when diagnosing
		 * issues with the agent, 'info' and higher will impose the least overhead on
		 * production applications.
		 */
		level: 'info',
		// level: 'trace',
		filepath: 'stdout',
	},
};
