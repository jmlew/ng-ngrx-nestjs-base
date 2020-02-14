# Angular NgRx & NestJS Base App

A Base [Angular](https://angular.io/) app using [NgRx](https://ngrx.io/) for state
management and a [NestJS](https://docs.nestjs.com/) mock backend API.

Organised as a [Nx](https://nx.dev) monorepo with shared libraries containing common API models and utils.

Provides a best practice starting point for developing scaleable Angular web apps.

## Recommended VSCode extensions

Find a list in .vscode/extensions.json to ensure the best development experience.

## Code scaffolding

### Create Angular Common Folders

Create common folders with index barrel-files by opening the relevant dir in the terminal
and running `sh create-dirs.sh` with the list of directories appended. If no directories
are appended, the default subdirectories are created.

Eg, from a directory two levels deep, run `sh ../../create-dirs.sh` to create defaults, or
`sh ../../create-dirs.sh components containers services` to create specific directories.

### Generate Angular Boilerplate

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Main Serve / Build / Test scripts

### Serve

Run `npm start` to serve both the frontend and backends simultaneously.

Or run each separately using `npm run serve:fe` for the frontend and `npm run serve:be`
for the backend.

- Navigate to `http://localhost:4200/` for the main frontend.
- Navigate to `http://localhost:3333/api/` for the mock-api backend.

> HTTP calls to paths beginning with `/api` are forwarded to the backend url using the proxy.conf.json when serving in development mode.

> Switch between the local mock-api and external environments using the apiUrl property in `<app>/shared/constants/buildDetails`

### Serve & Test Angular components

Run `npm run playground` and navigate to `http://localhost:4201/` to serve each component
in isolation using [Angular Playground](https://angularplayground.it/).

> Sandboxed contexts are found in the ".sandbox.ts" files generated for relevant component.

### Build

Run `npm run build` to build the project.
Run `npm run build:prod` to build the production-ready project.

> The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Unit tests are run using [Jest](https://jestjs.io)

Run `npm run test:fe` to execute the unit tests on the frontend and `npm run test:be`
on the backend.

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Generate a common library

Run `ng g @nrwl/angular:lib my-lib` to generate a library which can be iported from any of the apps created.

## Further help

Check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Check out the [Nx Documentation](https://nx.dev/angular)
