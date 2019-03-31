---
name: Start from scratch
menu: Guides
route: /guides/start
---

# 🚀 Initialise Starter

At this point you are required to clone and manually copy the folder that you need from `packages/`. After copying the required starter follow the per-starter instructions as below:

- [📜 Page Driven Starter](#%F0%9F%93%9C-page-driven-starter)
- [📺 Client Side Starter](#%F0%9F%93%BA-client-side-starter)

## 📜 Page Driven Starter

[![](https://img.shields.io/badge/page--driven--starter-0.1.1-blue.svg)](https://github.com/OpenUpSA/react-webapp-starters/tree/master/docs/starters/page-driven-starter.md) 

This starter is built for straight-forward content/document driven projects. In other words, web projects that follow a traditional *load page*, *click on link*, *load new page* (repeat every time a user navigates to new content) model.

These projects have very limited interactivity and do not preserve state between page transitions. Furthermore, they have no conception of a user (either as anonymous or logged in).

Examples might include:
- A hardcoded micro-site.
- A CMS-driven website showcasing an organisation's work (with a contact form).
- A very simple directory site based off JSON files.

[Initialise the Page Driven Starter](#)

## 📺 Client Side Starter

[![](https://img.shields.io/badge/client--side--starter-0.1.1-blue.svg)](https://github.com/OpenUpSA/react-webapp-starters/tree/master/docs/starters/client-side-starter.md) 

This starter is built when a React webapp needs to be integrated into existing server-side templating. For example a project already does templating with Django, Jekyll, PHP, etc. Alternatively, this starter is also usefull when we want to embed a webapp in a third-party page that we have no control over.

Note that code-splitting will be added in future versions of this starter in order to make it more performant.

Example might include:
- Integrating a small React widgets into an existing Django project.
- As a temporary solution while a server-side templating project is transitioned to one of the other React starters.
- Providing partners with a single JavaScript file they can embed in their site delivered from a Netlify CDN.

[Initialise the Client Side Starter](#)