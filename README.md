# 🎁 React Webapp Starters

**A collection of standardised, open-sourced and well-documented project starters used to bootstrap React webapps at OpenUp.**

- [🚀 Getting Started](#%F0%9F%9A%80-getting-started)
  - [Page Driven Starter](#page-driven-starter)
  - [Client Side Starter](#client-side-starter)
- [⭐ Goals](#%E2%AD%90-goals)
  - [Self-driven onboarding](#self-driven-onboarding)
  - [Comprehensive scope](#comprehensive-scope)
  - [Effortless set-up](#effortless-set-up)
  - [Encourages Iteration](#encourages-iteration)
- [🚚 Roadmap](#%F0%9F%9A%9A-roadmap)
  - [0.2.0](#020)

## 🚀 Getting Started

At this point you are required to clone and manually copy the folder that you need from `packages/`. After copying the required starter follow the per-starter instructions as below:

- [Page Driven Starter](#page-driven-starter)
- [Client Side Starter](#)

### Page Driven Starter

[![](https://img.shields.io/badge/page--driven--starter-0.1.1-blue.svg)](https://github.com/OpenUpSA/react-webapp-starters/tree/master/docs/starters/page-driven-starter.md) 

This starter is built for straight-forward content/document driven projects. In other words, web projects that follow a traditional *load page*, *click on link*, *load new page* (repeat every time a user navigates to new content) model.

These projects have very limited interactivity and do not preserve state between page transitions. Furthermore, they have no conception of a user (either as anonymous or logged in).

Examples might include:
- A hardcoded micro-site.
- A CMS-driven website showcasing an organisation's work (with a contact form).
- A very simple directory site based off JSON files.

[Use the Page Driven Starter](https://github.com/OpenUpSA/react-webapp-starters/tree/master/docs/starters/page-driven-starter.md)

### Client Side Starter

[![](https://img.shields.io/badge/client--side--starter-0.1.1-blue.svg)](https://github.com/OpenUpSA/react-webapp-starters/tree/master/docs/starters/client-side-starter.md) 

This starter is built when a React webapp needs to be integrated into existing server-side templating. For example a project already does templating with Django, Jekyll, PHP, etc. Alternatively, this starter is also usefull when we want to embed a webapp in a third-party page that we have no control over.

Note that code-splitting will be added in future versions of this starter in order to make it more performant.

Example might include:
- Integrating a small React widgets into an existing Django project.
- As a temporary solution while a server-side templating project is transitioned to one of the other React starters.
- Providing partners with a single JavaScript file they can embed in their site delivered from a Netlify CDN.

[Use the Client Side Starter](https://github.com/OpenUpSA/react-webapp-starters/tree/master/docs/starters/client-side-starter.md)

## ⭐ Goals
**The creation (and all further iterations) of these starter are driven by the following four goals:**

### Self-driven onboarding

After reading a starter's documentation, contributors should be able to jump straight into any OpenUp project built on this starter with minimal guidance/instruction from the existing project team (projects need to indicate in their `README.md` file where they diverge from the starter, otherwise it can be assumed that a project follows the exact structure and standards laid out in the starter).

It is essential that the technologies, integrations and conventions used in this starter be popular/well-used and extensively documented themselves. In addition, the starter should also include tooling that encourages internal project-documentation and creation of tests alongside normal day-to-day development.

### Comprehensive scope
These starters should be infinitely scaleable and usable in a wide range of projects without the introduction of additional technologies and/or modification to the stack included in the starter. (However included tooling should be easily removable on a per project basis if it is overkill for that specific use case - for example if the webapp does not have to store data in any manner it should be easy to strip out localStorage and remote DB integrations).

Therefore, any significant changes or tweaks to the current system on a per-project basis should be considered as a code smells.

### Effortless set-up
Although specifically built for front-end developers, non-FEDs should be able to make basic changes to existing projects and/or bootstrap simple projects themselves, or even compose new functionality/features from pre-existing modular blocks.

This means that no environment-specific hacks or additional steps should be required to get the starter (or projects built on the starter) running on different operating system or circumstances. The starter should (to this end) be continually tested in different environments and by developers of different backgrounds/skill levels.

### Encourages Iteration
Not only should the structure of these starters aid and encourage quick iteration cycles, but the starter itself should be built/developed in a manner that allows iteration on starters themselves.

All technology and integrations underpinning starters should be siloed/decoupled from one another as far as possible and have minimal custom configuration. The critical implication being that the team should be able to to easily swap out/update existing technologies at later points if needed.

## 🚚 Roadmap

### 0.2.0
- [ ] Add instructions on how to bootstrap 'openup-content-starter'.
- [ ] Create 'helpers' package that shares helper code between projects.
- [ ] Add helper that abstracts away removing props passed from a styled component to it's child.
