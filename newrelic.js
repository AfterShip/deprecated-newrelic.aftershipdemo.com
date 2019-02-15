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

exports.config = {
	/**
	 * Array of application names.
	 */
	app_name: [`${APP_NAME}`],

	/**
	 * Your New Relic license key.
	 */
	license_key: "xxx",

	distributed_tracing: {
		enabled: true,
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
