/* eslint-disable import/no-extraneous-dependencies */

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { text, boolean, select } from '@storybook/addon-knobs';
import { CssBaseline } from '@material-ui/core';
import calcThemeShade from './calcThemeShade';

import content from './README.md';
import Button from './index';

const fakeChildren = `${faker.hacker.verb()} ${faker.hacker.noun()}`;
const themeValues = [null, 'dark', 'light'];

const ComponentWithKnobs = (props: any): JSX.Element => {
  const { primary, theme = null, autoLoading, loading } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Button
        primary={boolean('primary', primary)}
        theme={select('theme', themeValues, theme)}
        autoLoading={boolean('autoLoading', autoLoading)}
        loading={boolean('loading', loading)}
      >
        {text('children', fakeChildren)}
      </Button>
    </Fragment>
  );
};

const helpers = () => (
  <Fragment>
    <CssBaseline />
    <code><pre>calcThemeShade() --> {calcThemeShade()}</pre></code>
    <code><pre>calcThemeShade('light') --> {calcThemeShade('light')}</pre></code>
    <code><pre>calcThemeShade('dark') --> {calcThemeShade('dark')}</pre></code>
  </Fragment>
);

const basic = (): JSX.Element => <ComponentWithKnobs />;
const primary = (): JSX.Element => <ComponentWithKnobs primary />;
const lightTheme = (): JSX.Element => <ComponentWithKnobs theme="light" />;
const darkTheme = (): JSX.Element => <ComponentWithKnobs theme="dark" />;
const isLoading = (): JSX.Element => <ComponentWithKnobs isLoading />;
const autoLoading = (): JSX.Element => <ComponentWithKnobs autoLoading />;

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('component.Button', module)
  .add('README', () => <div />, readmeConfig)
  .add('HELPERS', helpers)
  .add('Basic', basic)
  .add('Primary', primary)
  .add('Light Theme', lightTheme)
  .add('Dark Theme', darkTheme)
  .add('Loading', isLoading)
  .add('Auto Loading', autoLoading);
