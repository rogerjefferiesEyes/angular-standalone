# Applitools Eyes NX Angular Standalone / Cypress Example

This is an example for using Applitools Eyes in E2E testing for an NX Angular Standalone Project.
Details for setting up the @applitools/eyes-cypress plugin inside of an NX Angular Standalone Project are also provided, below. (See full documentation for the `@applitools/eyes-cypress` plugin here: [https://www.npmjs.com/package/@applitools/eyes-cypress](https://www.npmjs.com/package/@applitools/eyes-cypress).)



## Installation of `@applitools/eyes-cypress` plugin

To install inside of this example project:

```
npm install
```

To install in an existing NX Project:

```
npm i -D @applitools/eyes-cypress
```



## Manual Configuration of `@applitools/eyes-cypress` plugin

The `@applitools/eyes-cypress plugin` will be configured manually in this example. Follow the steps documented below to achieve this.


**1. Update `cypress.config.ts`:**

```typescript
import { defineConfig } from 'cypress'
import eyesPlugin from '@applitools/eyes-cypress'
export default eyesPlugin(defineConfig({
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
}))
```

* Import `eyesPlugin` from `@applitools/eyes-cypress`.
* Wrap the call to Cypress' `defineconfig` with a call to `eyesPlugin`.

<br>

**2. Add Applitools Eyes commands to all Cypress e2e projects:**

Add the following import statement to Cypress support file, under all 'e2e' project directories. <br>
(Example in this project: angular-standalone/e2e/src/support/e2e.ts.)

```typescript
import '@applitools/eyes-cypress/commands'
```
<br>

**3. (OPTIONAL) Add or update types and moduleResolution for `@applitools/eyes-cypress`, in tsconfig.json:** 

```json
{
  ...
  "compilerOptions": {
    ...
    "types": ["@applitools/eyes-cypress", "cypress", "node"]
    "moduleResolution": "node" // or "node16"
    ...
  }
}
```

<br>

**4. (OPTIONAL) Add `applitools.config.js` to root directory of node project, to configure global settings for `@applitools/eyes-cypress`.**

* Example in this project: angular-standalone/applitools.config.js

<br>

**5. Update Cypress spec files to run Visual Testing commands added by `@applitools/eyes-cypress`.**

Start Applitools Eyes Test Session (recommended in a `beforeEach` hook)
```typescript
cy.eyesOpen();
```

Capture a Visual Checkpoint with Applitools Eyes (for each desired UI state in test workflow)
```typescript
cy.eyesCheckWindow();
```

End Applitools Eyes Test Session (recommended in an `afterEach` hook)
```typescript
cy.eyesClose();
```

* Example spec file: angular-standalone/e2e/src/e2e/app.cy.ts

<br>

**6. Run NX e2e command, to execute Cypress tests (using npx).**

Run e2e tests (as found in this example project)
```
npx nx e2e e2e
```

<br><br>

---

<br><br>

# Tutorial: Building Angular Apps with the Nx Standalone Projects Setup

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)


Source code for the Angular standalone application tutorial on the Nx docs:
- Tutorial: https://nx.dev/getting-started/angular-standalone-tutorial

## What's inside?

This example contains a single Angular application that has been generated with the `angular-standalone` preset. 

```
npx create-nx-workspace@latest myngapp --preset=angular-standalone
```

It contains 

- a single root-level Angular application (in `src`)
- an e2e project based on Cypress
- two local libraries, `modules/products`, `modules/orders` and `modules/shared/ui` to demo how to modularize a codebase
- uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the Angular application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure

Alternatively 👇

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/nrwl/nx-recipes/tree/main/angular-standalone?file=README.md)