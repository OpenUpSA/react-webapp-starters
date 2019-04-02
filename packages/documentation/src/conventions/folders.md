---
name: Folder Structure
menu: Conventions
route: /conventions/folders
---

# 🗄 Folder Structure

- [📡 Data](#%F0%9F%93%A1-data)
  - [Flat-file database](#flat-file-database)
  - [Constants](#constants)
- [📦 Assets](#%F0%9F%93%A6-assets)
- [⚙️ Tokens](#%E2%9A%99%EF%B8%8F-tokens)
- [🔨 Helpers](#%F0%9F%94%A8-helpers)
- [📐 Types](#%F0%9F%93%90-types)
- [👀 Views](#%F0%9F%91%80-views)
- [♻️ Components](#%E2%99%BB%EF%B8%8F-components)
- [🔌 Adaptors](#%F0%9F%94%8C-adaptors)
- [📪 Pages](#%F0%9F%93%AA-pages)
- [📬 Templates](#%F0%9F%93%AC-templates)
- [🎠 Redux](#%F0%9F%8E%A0-redux)
- [👤 Cms](#%F0%9F%91%A4-cms)

The project is broken into encapsulated semantic units each starting at their broadest level from the `/src/` folder downwards.

Everything outside of the `/src/` folder can be considered workflow configuration files (these include files like `jest.config.js`, `package.json` and `.eslintrc`) and should not be considered as part of the above organisational pattern. It can be assumed that all files outside of `src/` is not used in the code itself but rather as configuration used by a specific NPM scripts (for example `yarn test:lint`) or third-party integrations (for example `.travisrc`).

The most barebones webapps needs the following:

- [👀 Views](#%F0%9F%91%80-views) that create a piece of UI.
- A way to provide those views to users, either via:
  - [🔌 Adaptors](#%F0%9F%94%8C-adaptors) with existing server-side templating
  - [📪 Pages](#%F0%9F%93%AA-pages) in the form of static HTML files created by Gatsby.


In addition you probably don't want hardcode data into your views themselves. This means that you might also want to add the following:
- [📡 data](#%F0%9F%93%A1-data) in the form of local `.json` or `.md` files.
- [👤 Cms](#%F0%9F%91%A4-cms) in the form of Netlify CMS so that contributors can add/modify local data.
- [📬 Templates](#%F0%9F%93%AC-templates) in order to build static HTML files based on local data.

We might also want to enhance our local data with the following:
- [📐 Types](#%F0%9F%93%90-types) in the form of TypeScript declarations to annotate our data schema.
- [📦 Assets](#%F0%9F%93%A6-assets) if we want to store non-`.json`/`.md` files - can be managed via CMS.

Furthermore, in order to scale our UI as our code grows it might be worth it to break views into composable units:
- [♻️ Components](#%E2%99%BB%EF%B8%8F-components) as reusable UI parts that get shared amongst views.
- [⚙️ Tokens](#%E2%9A%99%EF%B8%8F-tokens) low-level visual design patterns used throughout the project.
- [🔨 Helpers](#%F0%9F%94%A8-helpers) JavaScript functions that abstract away common processes.

Once our project starts getting complex enough it might be worthile to add the following:
- [🎠 Redux](#%F0%9F%8E%A0-redux) containing all Redux code used to save, load and manipulate global project state.

## 📡 Data

**In short, the `/src/data` folder is essentially a flat-file database that can be access during project build time (when webpack runs).**

Two types of files are usually stored in `/src/data/`. These are: `.json` and `.md`. In addition, the type of content that gets saved in `/src/data/` can be broken down into one of the following:

- [Flat-file database](#flat-file-database)
- [Constants](#constants)

### Flat-file database

*NOTE: Please proceed straight to the Hardcoded Data section if you project is not using GatsbyJS*

The most common use case is to store either `.md` (with front-matter) or `.json` files inside `/src/data` in respective sub-folders. For example `/src/data/posts` with `.md` files and/or `/src/data/categories` with `.json` files. If the project is using Gatsby these can be accessed via GraphQL. For example with the following query:

```graphql
{
  categories: allCategoriesJson {
    edges {
      nodes {
        id,
        name,
        image,
      }
    }
  },
  posts: allMarkdownRemark {
    edges {
      nodes {
        frontmatter {
          title,
        }
        id,
        html,
      }
    }
  }
}
```

Furthermore you can create relationships between these by including the following in the `gatsby-config.js`:

```js
module.exports = {
  mapping: {
  'allCategoriesJson.posts': 'allMarkdownRemark.frontmatter.id',
  'allMarkdownRemark.frontmatter.category': 'allCategoriesJson.id',
  }
}
```

The above creates a two way mapping between two types of data (posts and categories). This means that we do the following query in GraphQL:

```graphql
{
  categories: allCategoriesJson {
    edges {
      nodes {
        categories,
      }
    }
  },
  posts: allMarkdownRemark {
    edges {
      nodes {
        frontmatter {
          posts,
        }
      }
    }
  }
}
```

### Constants

*NOTE: Constants should only go into `/src/data` if they are used in more than one module. If they are only used in one module then they can be placed in a `data.json` file inside the module. For example `/src/helpers/calculateValueAddedTax/data.json`.*

Since Webpack 3, we can actually import `.json` straight into JavaScript files. This means that we can load the JSON as ES Modules (if you know the path, for example `import languages from '../../data/categories/animals.json'`).

This is helpful if you want to for example store a list of the languages used in this project and the isoKeys :

```json
/* /src/data/hardcoded/langauges.json */

{
  "eng": "English",
  "afr": "Afrikaans",
  "spa": "Spanish",
  "xho": "Xhosa",
  "nso": "Northern Sotho",
  "por": "Portuguese",
  "sot": "Southern Sotho",
  "tsn": "Tswana",
  "zul": "Zulu"
}
```

The above is useful if you don't have GatsbyJS in your stack or you just want to pull the data in directly without booting up the entire Gatsby GraphQL process just to retrieve the above. 

## 📦 Assets

**In short, the `/src/assets` folder is essentially for files that the browsers do not parse directly, but merely embed or download from a page.**

This might include (amonst various other the following):

- `.svg`
- `.png`
- `.jpeg`
- `.mp3`
- `.avi`
- `.pdf`

Generally all assets should be embedded in a per moduel basis (as they are used). For example:

```
└── Slideshow
    ├── index.tsx
    ├── index.stories.tsx
    ├── slide-1.jpg
    ├── slide-2.jpg
    └── slide-3.jpg
```

However if the number of assets get a bit overwhelming they can be broken off into a helper script with it's own folder. For example: 

```
└── ImageGallery
    ├── index.tsx
    ├── index.stories.tsx
    └── getImage
        ├── index.ts
        ├── image-1.jpg
        ├── image-2.jpg
        ├── image-3.jpg
        ├── image-4.jpg
        ├── image-5.jpg
        └── ...
```

The latter prevents the component folder from becoming too noisy.

However, in cases where an asset is re-used in more than one module they should be placed globally in the `/src/assets/` folder. For example the project logo might be saved in `/src/assets/logo/large.png` and `/src/assets/logo/small.png`.

## ⚙️ Tokens
...Description pending...

## 🔨 Helpers
...Description pending...

## 📐  Types
...Description pending...

## 👀 Views

**Views are React components that output actual markup and styling (in short the designed UI that the user sees in the browser).**

Views usually accept props and render a specific piece of UI based on the value of the props that were passed. Generally a view folder consists primarily of a `index.tsx` entry file that calls other global or  view-specific (placed in the view folder itself) in order to render a piece of UI.

For example a single view component might be either one of these:

- A page interface that showcases details about a specific product on an e-commerce store.
- A page that shows a list of all registered users on a site.
- A small widget that is embedded in a external/third-party site.
- A piece of React UI that is embedded alongside other server-side templating languags like Django, etc.
- Or even project's homepage itself.

`/src/views` will be where the majority of our JSX component live (unless they are re-used by more than one views - then they can be moved to `src/components/`)

**View Container Components**

It is generally good practice to seperate your components that output markup from your components that manage internal UI state. To learn more you can have a look at the [container component pattern](https://reactpatterns.com/#container-component) and it's counterpart the [function component](https://reactpatterns.com/#function-component) on [reactpatterns.com](https://reactpatterns.com).

If your view component does not have state it can just be created as functional component (also called stateless component or presentational component). For example:

`src/views/Greet/index.tsx`
```tsx
import React from 'react';

import { greetings } from '../../data/hardcoded/languages'
import { TuserId } from '../../types/user';
import { emojis } from './emoji';
import { TuserMood } from './types';

interface PropsShape {
  mood?: Tmood;
  id: TuserId;
}

const LandingPage = ({ mood = 'neutral', id }: PropsShape): JSX.Element => (
  <div>
    <h1>{greetings.eng} to {id ? `user number ${id}` : 'anonymous user'}!</h1>
    <p>I am {mood} that you are in a {mood} mood! {emojis[mood]}</p>
  </div>
);
```

You will see that we made use of global files from both `/src/types` and `/src/data`. However, there are a couple of types and data that is specific to this view only, so it can be embedded directly in the `Greet` folder as follows:

`/src/views/Greet/types.ts`
```ts
/**
 * A value that indicates the current emotional state of the user. Can be toggled by the user themselves.
 * Default to 'neutral' if not supplied.
 */
export default type Tmood = 'sad' | 'neutral' | 'happy';
```
`/src/views/Greet/data.json`
```json
{
  "emojis": {
    "sad": "😔",
    "neutral": "😐",
    "happy": "😁"
  }
}
```

However, currently the `mood` property is being passed straight into the `Greet` component. Let us say that we actaully want a user's `mood` property to be controlled from this view itself. The pattern above would require us to create a second component to manage the UI state, and furthermore in accordance with the [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react) we can only have one component per file.

This means that we will transform the functional component into a `Presentation.jsx` file (while we will add the state as the entry file `index.jsx`):

```
views
    └── Greet
        ├── index.tsx
        ├── data.json
        ├── types.ts
        └── Presentation.tsx
```

`src/views/Greet/index.tsx`
```tsx
import React, { Component } from 'react';
import Presentation from './Presentation';

export default class LandingPage extends Component {
  constructor(props) {
    this.state = {
      mood: 'neutral'
    }

    this.events = {
      changeMood: this.changeMood.bind(this),
    }
  }

  changeMood(mood) {
    return this.setState({ mood })
  }

  render(): JSX.Element {
    const { state, events } = this;
    const passedProps = { ...state, ...events };
    return <Markup {...passedProps} />;
  }
}
```

If we want to add an additional State controller or Presentation component on top of the above we merely have to create another `index.tsx` file and rename the above to `State.tsx`. This approach can be continue *ad infinitum* as long as these files are only scope to the Greet view.

```
views
    └── Greet
        ├── index.tsx
        ├── data.json
        ├── types.ts
        ├── State.tsx
        └── Presentation.tsx
```

Not only does the above arrangement make for less coupling (seperation of concerns). It also makes it easy at a glance to get a feel for a view before you even open a single file.

However, as per the principle of [grouping by features and routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes), various other files can also be added into the component folder as needed. For example:

```powershell
views
    └── Greet
        ├── index.tsx
        ├── index.stories.tsx
        ├── data.json
        ├── types.ts
        ├── State.tsx
        ├── Presentation.tsx
        ├── Tooltip.tsx
        ├── icon.svg
        ├── icon-fallback.png
        ├── banner.jpeg
        ├── stringToUppercase.ts
        └── README.md
```

In addition every view can have it's own `__tests__` sub-folder (the default folder name recommend by Jest for unit tests) that houses all associated tests and test-related data for a specific view. For example:

```powershell
views
    └── Greet
        ├── index.tsx
        ├── index.stories.tsx
        ├── data.json
        ├── types.ts
        ├── State.tsx
        ├── Presentation.tsx
        ├── Tooltip.tsx
        ├── icon.svg
        ├── icon-fallback.png
        ├── banner.jpeg
        ├── stringToUppercase.ts
        ├── updateUser.ts
        ├── README.md
        └── __tests__
            ├── stringToUppercase.data.ts
            └── stringToUppercase.test.ts

```

**Going Deeper**

It is easy to see how view folders might get eventually start getting really cluttered. Therefore views can have sub-components folders nested inside them. For example:

```powershell
views
    └── Greet
        ├── index.tsx
        ├── index.stories.tsx
        ├── data.json
        ├── types.ts
        ├── State
        │   ├── index.tsx
        │   ├── updateUser.ts
        │   └── __tests__
        │       ├── updateUser.data.ts
        │       └── updateUser.test.ts
        ├── Presentation
        │   ├── index.jsx   
        │   ├── styled.ts    
        │   ├── images
        │   │   ├── icon.svg
        │   │   ├── banner.jpeg
        │   │   └── icon-fallback.png
        │   └── Tooltip
        │       ├── index.tsx
        │       ├── styled.ts  
        │       ├── stringToUppercase.ts
        │       ├── icon-fallback.png
        │       └──__tests__
        │           ├── stringToUppercase.data.ts
        │           └── stringToUppercase.test.ts
        └── README.md
```

## ♻️ Components

**Components are essentially modular pieces that are shared between more than one views**

For all intents and purposes items in `/src/components/` follow the exact rules that items in `/src/views/` do with one exception: they are not bound to any specific view and can be re-used anywhere in the project that accepts React components (including in the `/src/cms` folder).

For example let us say we have a `Button` component in `src/components`:


```
components
    └── Button
        ├── index.tsx
        ├── State.tsx
        ├── stringToUppercase.ts
        ├── icon.svg
        └── Presentation.jsx

```

It can then be reused in the following files:

- `src/views/About/index.tsx`
- `src/views/User/Tag.tsx`
- `src/components/ButtonGroup.tsx`
- `src/tooling/cms-config/widgets/FancyButton.tsx`

*NOTE: Humans are notoriously bad at predicting the future. Therefore `/src/components/` should not be your first port of call if you are not 100% certain that you will use a piece of UI again. Rather (as a rule of thumb) embed a sub-component in the context where it is used and then only extract it into a modular version in `/src/components/` once you've used it at least two times in the project.*

## 🔌 Adaptors
...Description Pending...

## 📪 Pages

**If the project is using GatsbyJS then the `src/pages` folder is reserved to create hard-coded routes.**

 You can use this folder to create both root-level or nested routes. For example you might have:

```powershell
├── index.ts
├── about.ts
└── user
    ├── index.ts
    ├── profile.ts
    └── settings.ts
```

Which would translate into the following:
- www.site.org/: `index.ts`
- www.site.org/about: `about.ts`
- www.site.org/user: `user/index.ts`
- www.site.org/user/profile: `user/profile.ts`

As a rule of thumb these files should only be used to initialise view components (found in `/src/views/`) and should not contain any view-specific logic. I.e. views should be interchangeable. In order to adhere to the [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react) principle of [naming](https://github.com/airbnb/javascript/tree/master/react#naming) specifically using Pascal-casing for JSX components (since we don't want our path to be `/user/Profile/`) - all files in `/src/pages/` shoud have a `.ts` extension and therefore refrain from using [JSX](https://reactjs.org/docs/introducing-jsx.html). 

For example:

`src/pages/index.ts`
```ts
import { createElement } from 'react';
import LandingPage from '../views/LandingPage';

const render = () => {
  return createElement(LandingPage);
}

export default render();
```

To learn more about using `createElement` without JSX visit the [React API documentation on createElement](https://reactjs.org/docs/react-api.html#createelement).

Generally there are two types of values you pass from a route to a view:

**Hardcoded values**

You might have two routes that use the same view, but has minor changes. For example:

`src/pages/index.js`
```ts
import { createElement } from 'react';
import LandingPage from '../views/LandingPage';

const render = () => {
  return createElement(LandingPage, { color: 'grey' }));
}

export default render();
```

`src/pages/vip/index.js`
```ts
import { createElement } from 'react';
import LandingPage from '../views/LandingPage';

const render = () => {
  return createElement(LandingPage, { color: 'gold' }));
}

export default render();
```

**Dynamic data**

More often than not `/src/pages` is the point where dynamic information from `/src/data/` enters into views (unless they are imported directly via ES Modules).

In order to keep views predictable and testable, GraphQL queries should be kept out of `src/views` and rather passed as props from `src/pages/`.

For example:

`src/pages/index.ts`
```ts
import { createElement } from 'react';
import { graphql } from 'gatsby';
import LandingPage from '../views/LandingPage';

const render = ({ data }) => {
  const { description } = data.site.constants;
  return createElement(LandingPage, { description });
}

const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export { query };
export default render();
```

You can learn more about `/src/pages/` in the ['Pages' section in the Gatsby documenation](https://www.gatsbyjs.org/docs/recipes/#creating-pages)

## 📬 Templates

**If the project is using GatsbyJS then the `src/pages` folder is reserved to routes created programatically from data.**

`/src/templates/` share a lot of similarities with `/src/pages/`. Similar to `/src/pages/` this folder is exclusively used to initialise views from `src/views`. 

The primary difference between `/src/pages/` and `/src/templates/` is that routes are not automatically created by their mere existence in the `/src/templates/` folder. They need to be triggered through the `gatsby-node.ts` file (that creates the appropriate `gatsby-node.js` file). You can learn more about `gatsby-node.js` in ['Node API' section in the Gatsby documentation](https://www.gatsbyjs.org/docs/node-apis/).

*NOTE: 'node' in the above context refers to GraphQL nodes and should not be confused with NodeJS*

Files inside `src/templates` have access to all Gatsby GraphQL nodes (via GraphQL queries) and values passed to the `context` property used by the `createPage()` in `gatsby-node.js`. In short the purpose of `src/templates` is to tie values passed into `createPage()` during static site generator to actual views. 

The most common use case is to use data from local `.md` or `.json` files to create pages, however it is also possible to create pages from remote sources via [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Learn how to dynamically create pages via Gatsby in the ['Programmatically create pages from data' section in the Gatsby documenation](https://www.gatsbyjs.org/tutorial/part-seven/).

_Note: since the folder structure in `src/templates` have no bearing on the actual output templates can be organised in folders if the root folder starts getting a bit noisy. For example:_


```powershell
templates
    ├── users
    │   ├── favourites.ts
    │   ├── purchased.ts
    │   └── reviews.ts
    └── products
        ├── list.ts
        ├── product.ts
        └── details.ts
```

## 🎠 Redux
...Description Pending...

## 👤 Cms
...Description Pending...