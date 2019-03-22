// Documentation for the Gatsby Browser API (used by this file) at https://www.gatsbyjs.org/docs/browser-apis/

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

/**
 * Imports all modules needed to bootstrap Redux store before React initialises
 */
import { createElement } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

/**
 * Uses a Gatsby lifecycle hook to exposes the Redux store to all React components via NodeJS
 * when Gatsby is building the static HTML resources. This is done by means of the 'react-redux' library. Redux store should always take the form of values specififed in `/src/redux/store/initialState/`, since there store is currently no modified during the build process.
 */
const wrapRootElement = ({ element }) => createElement(Provider, { store }, element);

export { wrapRootElement };
