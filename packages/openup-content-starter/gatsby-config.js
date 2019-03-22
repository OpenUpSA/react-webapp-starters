// Documentation for the Gatsby Config API (used by this file) at https://www.gatsbyjs.org/docs/gatsby-config/

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const env = require('dotenv').config();

const createGatsbyConfig = require('./src/scripts/createGatsbyConfig');

/**
 * Runs `createGatsbyConfig()`, a function that accepts all ENV variables and the project root path,
 * and configures all Gatsby plugins based on the values passed.
 */
return createGatsbyConfig(env, __dirname);
