# Vue Vite starter

This is a starter template for a project that uses Vue 3 and Vite.
The main purpose of this project is to reduce the time necessary to scaffold a new feature packed Vue project.

## Features overview

* Vue 3
* Vue Router
* Vuex
* Typescript support
* [Vite](https://vitejs.dev/)
* CSS modules and SCSS support
* Error checking with ESLint and code formatting with Prettier
* Unit testing with Jest
* TODO: E2E testing
* TODO (maybe): Git hooks

## Installation Usage

You should first install the dependencies using npm:

```
npm install
```
***
To start the Vite dev server you can use:

```
npm run dev
```
***
To build the project for production you can use:
```
npm run build
```
***
To check for errors in your Vue and Typescript files you can use:
```
npm run lint:es
```
***
To automatically format the code with Prettier you can use:
```
npm run format
```
***
To unit test Typescript and Vue components with Jest you can use:
```
npm run test:unit
```
At the moment _@vue/test-utils_ does not fully support CSS modules for Vue 3.
Until proper support is added the following lines must be added at the beginning of each file, to ensure tests pass:
```typescript
import { config } from "@vue/test-utils";

config.global.mocks = config.global.mocks || {};
config.global.mocks.$style = {};
```

An example of a unit test file can be found in _./src/components/HelloWorld.spec.ts_
