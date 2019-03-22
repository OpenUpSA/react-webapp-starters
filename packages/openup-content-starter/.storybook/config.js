import { configure, addDecorator } from "@storybook/react";
import { addReadme } from 'storybook-readme';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";
import { configureReadme } from 'storybook-readme';

const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(withA11y);

configure(loadStories, module);
