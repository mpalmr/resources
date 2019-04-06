# Tools and Libraries

To install any of these libraries run `npm install <package-name>` or `npm install --save-dev <package-name>`.


***
- [General](#general)
	- [Dates and Times](#dates-and-times)
- [Frontend](#frontend)
	- [CSS](#css)
	- [UI Components](#ui-components)
		- [UI Frameworks](#ui-frameworks)
		- [Rich Editors](#rich-editors)
	- [React](#react)
		- [Redux](#redux)
	- [Polyfills](#polyfills)
- [Node](#nodejs)
	- [Express](#backend)
	- [Databases](#databases)
	- [Cryptography](#cryptography)
- [Testing](#testing)
	- [Test Runners](#test-runners)
	- [Assertions](#assertions)
	- [Mocking](#mocking)
- [Development Libraries](#development-libraries)
	- [Babel](#compilers)
	- [Module Bundlers](#module-bundlers)
	- [CSS Tools](#css-tools)
	- [Generators](#generators)
***




## General

- [**axios:**](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js _(a better Fetch API)_.
- [**ramda:**](https://ramdajs.com/) Utility library with a functional programming lean. Similar to [lodash](https://lodash.com/).
- [**create-error:**](https://www.npmjs.com/package/create-error) Helper for creating subclassed errors in Javascript.
- [**title-case:**](https://www.npmjs.com/package/title-case) Converts strings to and from _titleCase_.


### Dates and Times

- [**luxon:**](https://moment.github.io/luxon/) Official replacement for moment.
- [**moment:**](https://momentjs.com) Most popular utility library for dates.
- [**dayjs:**](https://github.com/iamkun/dayjs) 2KB immutable date library alternative to Moment.js with the same modern API.
- [**date-fns:**](https://date-fns.org/) Standalone functions for working with dates.




## Frontend

- [**js-cookie:**](https://www.npmjs.com/package/js-cookie) Abstraction for working with cookies in client-side JavaScript.
- [**classnames:**](https://www.npmjs.com/package/classnamesq) Utility for conditionally joining classNames together. Popularly used with React and other VDOM libraries.
- [**font-awesome:**](https://fontawesome.com/) Vector icons and social logos.


### CSS

- [**normalize.css:**](https://necolas.github.io/normalize.css/) Makes browsers render all elements more consistently and in line with modern standards. UI frameworks like [Bootstrap](https://getbootstrap.com/) should not be used in combination with this library.




### UI Components

- [**pikaday:**](https://www.npmjs.com/package/pikaday) Datepicker input.


#### UI Frameworks

- [**bootstrap:**](https://getbootstrap.com/) Most widespread and popular.
	- [**reactstrap:**](https://reactstrap.github.io/) for [React](https://reactjs.org/), or [react-bootstrap](https://react-bootstrap.github.io/) for version 3.
	- [**bootstrap-vue:**](https://bootstrap-vue.js.org/) For [Vue](https://vuejs.org/).
	- [**@ng-bootstrap/ng-bootstrap:**](https://ng-bootstrap.github.io/) For [Angular](https://angular.io/).
- [**foundation:**](https://foundation.zurb.com/) A family of UI framework that values correctness over ease of use. The frameworks are foundation for [sites](https://foundation.zurb.com/sites), [apps](https://foundation.zurb.com/apps.html), and [emails](https://foundation.zurb.com/emails.html).
	- [**foundation-cli:**](https://www.npmjs.com/package/foundation-cli) Downloads and installs blank templates in any of the three Foundation frameworks.
	- [**react-foundation:**](https://react.foundation/) for [React](https://reactjs.org/).
- [**semantic-ui:**](https://semantic-ui.com/) Focus on being easy to develop with.
	- [**semantic-ui-react:**](https://react.semantic-ui.com/) For [React](https://reactjs.org/).
	- [**semantic-ui-vue:**](https://semantic-ui-vue.github.io/) For [Vue](https://vuejs.org/).
	- [**semantic-ui-angular:**](https://www.npmjs.com/package/semantic-ui-angular) For [Angular](https://angular.io/).
- [**bulma:**](https://bulma.io/) Small and lightweight.


#### Rich Editors

- [**froala-editor:**](https://www.froala.com/wysiwyg-editor) Content editor for user generated HTML. _(Not free for commercial projects)_
	- [**react-froala-wysiwyg:**](https://www.froala.com/wysiwyg-editor/docs/framework-plugins/react) For [React](https://reactjs.org/).
	- [**vue-froala-wysiwyg:**](https://www.froala.com/wysiwyg-editor/docs/framework-plugins/vue) For [Vue](https://vuejs.org/).
	- [**angular-froala-wysiwyg:**](https://www.froala.com/wysiwyg-editor/docs/framework-plugins/angularjs-2-4) For [Angular](https://angular.io/).
- [**monaco-editor:**](https://microsoft.github.io/monaco-editor/index.html) The ***code*** editor that powers [VS Code](https://code.visualstudio.com/).
- [**brace:**](https://www.npmjs.com/package/brace) [Ace editor](https://ace.c9.io/) which excels at editing ***code*** rather than website content.


### [React](https://reactjs.org)

- [**create-react-app:**](https://facebook.github.io/create-react-app/) Generates a starting point for React projects.
- [**prop-types:**](https://reactjs.org/docs/typechecking-with-proptypes.html) Runtime type checking for React props and similar objects.
	- [react-router-prop-types](https://www.npmjs.com/package/react-router-prop-types)
	- [react-moment-proptypes](https://www.npmjs.com/package/react-moment-proptypes)
- [**react-router:**](https://reacttraining.com/react-router/) Client-side router for conditionally rendering different components depending on the URL. This or another routing library is neccessary for any single page application.
- [**reactstrap:**](https://reactstrap.github.io/) React components for [Bootstrap v4](https://getbootstrap.com/) components. Recommended to use in a React project over regular [bootstrap](https://www.npmjs.com/package/bootstrap). _For Bootstrap v3 use [react-bootstrap](https://react-bootstrap.github.io/)._
- [**react-table:**](https://www.npmjs.com/package/react-table) Datatable that can sort, filter, and more.
- [**react-virtualized:**](https://bvaughn.github.io/react-virtualized/) Efficient rendering of large lists and tabular data.
- [**mobx:**](https://mobx.js.org/) Global state store for React like [**Redux**](https://redux.js.org/).

#### [**Redux**](https://redux.js.org/)
Global state store. Although not specifically for React, most people reading this list will likely be using it along side it.

- [**react-redux:**](https://www.npmjs.com/package/react-redux) Official React bindings.
- [**redux-thunk:**](https://www.npmjs.com/package/redux-thunk) Allows asyncronous actions. I recommend this over [redux-saga](https://redux-saga.js.org/).
- [**reselect:**](https://www.npmjs.com/package/reselect) Selector library to get specific combinations and transformations of Redux's state.
- ***Development Tools***
	- [**redux-devtools-extension:**](http://extension.remotedev.io/) Allows for integration with the Redux browser DevTools extensions for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/).
	- [**redux-logger:**](https://www.npmjs.com/package/redux-logger) Logs Redux actions to the console.

#### Form Inputs

- [**react-select:**](https://react-select.com/home) Fancy `<select>`.
- [**react-dates:**](http://airbnb.io/react-dates/) Date picker by Airbnb.
- [**rc-time-picker:**](https://react-component.github.io/time-picker/) Time picker.
- [**react-phone-number-input:**](https://catamphetamine.github.io/react-phone-number-input/) International phone number input.
- [**react-autosuggest:**](https://react-autosuggest.js.org/) Autocompleter.
- [**react-geosuggest:**](https://ubilabs.github.io/react-geosuggest/) Autocompleter using [Google Places API](https://developers.google.com/places/web-service/intro).
- [**react-dropzone:**](https://react-dropzone.js.org/) Drag'n'drop zone for files.
- [**react-ace:**](https://securingsincity.github.io/react-ace/) React component for the [ace editor](https://ace.c9.io/) which excels at editing code rather than website content.
- [**react-color:**](https://casesandberg.github.io/react-color/) Colour picker inputs.


### Polyfills

Implements standard features in environments that do not have them implemented yet.

- [**whatwg-fetch:**](https://www.npmjs.com/package/whatwg-fetch) Polyfill for the [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API).
- [**url-polyfill:**](https://www.npmjs.com/package/url-polyfill) Polyfills for the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) and [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) prototypes.




## NodeJS

- [**rimraf:**](https://www.npmjs.com/package/rimraf) The UNIX command rm -rf for node.
- [**dotenv:**](https://www.npmjs.com/package/dotenv) Loads environment variables from a .env file.
- [**commander:**](https://www.npmjs.com/package/commander) Eases the creation command line utilities and appliations.
- [**winston:**](https://www.npmjs.com/package/winston) General purpose logging library.
- [**chalk:**](https://www.npmjs.com/package/chalk) Terminal string styling.
- [**ws:**](https://www.npmjs.com/package/ws) [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) implementation for NodeJS.


### Express

- [**express:**](https://expressjs.com/) Fast, unopinionated, minimalist web framework for node.
- [**express-generator:**](https://expressjs.com/en/starter/generator.html) Use the application generator tool, express-generator, to quickly create an application skeleton.
- [**serve-favicon:**](https://www.npmjs.com/package/serve-favicon) HTTP server (Express) middleware for serving favicons.
- [**express-session:**](https://www.npmjs.com/package/express-session) Simple session middleware for Express.
	- [**connect-session-knex:**](https://www.npmjs.com/package/connect-session-knex) Integrates express-session with any database [knex](https://knexjs.org/) is using.
- [**passport:**](http://www.passportjs.org/) Passport is authentication middleware. I recommend [express-session](https://www.npmjs.com/package/express-session) unless you plan on having multiple methods of authentication _(eg: Facebook and in-house)_.
- [**http-proxy-middleware:**](https://www.npmjs.com/package/http-proxy-middleware) Configurable HTTP proxy.
- [**morgan:**](https://www.npmjs.com/package/morgan) Request logger.


### Databases

- [**knex:**](https://knexjs.org/) SQL query builder that also deals with migrations and seeding.
- [**objection:**](https://vincit.github.io/objection.js/) [ORM](https://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it#answer-1279678) built on knex.
- [**pg-error-constants:**](https://www.npmjs.com/package/pg-error-constants) PostgresQL error constants for use with NodeJS.


### Cryptography

- [**argon2:**](https://www.npmjs.com/package/argon2) Implements the [Argon2](https://en.wikipedia.org/wiki/Argon2) crypgographically secure hashing algorithm.
- [**bcrypt:**](https://www.npmjs.com/package/bcrypt) Implements the [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) crypgographically secure hashing algorithm.
- [**scrypt-for-humans:**](https://www.npmjs.com/package/scrypt-for-humans) Implements the [scrypt](https://en.wikipedia.org/wiki/Scrypt) crypgographically secure hashing algorithm.





## Testing

- [**nyc:**](https://istanbul.js.org/) Test coverage reporting command line utility for Istanbul.
- [**sinon:**](https://sinonjs.org/) Standalone test spies, stubs and mocks.
- [**enzyme:**](https://airbnb.io/enzyme/) Utility for testing React components.


### Test Runners

- [**jest:**](https://jestjs.io/) Recommended test runner. Comes with mocking and assertions.
- [**mocha:**](https://mochajs.org/) Modular and comes with no assertion or mocking capabilities.
- [**jasmine:**](https://jasmine.github.io/) Comes with mocking and assertions. Is what [Angular](https://angular.io/) uses out of the box.
- [**nightwatch:**](http://nightwatchjs.org/) End-to-end testing framework _(not for unit tests)_.


### Assertions

- [**power-assert:**](https://www.npmjs.com/package/power-assert) Provides descriptive assertion messages through standard [assert](https://nodejs.org/api/assert.html) interface.
- [**chai:**](https://www.chaijs.com/) Has several interfaces that allow the developer to choose the most comfortable and has many [plugins](https://www.chaijs.com/plugins/).
- [**supertest:**](https://www.npmjs.com/package/supertest) HTTP assertions made easy via [superagent](https://visionmedia.github.io/superagent/).


### Mocking

- [**jsdom:**](https://www.npmjs.com/package/jsdom) Implementation of the WHATWG DOM and HTML standards, for use with NodeJS.
- [**mockdate:**](https://www.npmjs.com/package/mockdate) Mock for the built-in `Date` object.
- [**fetch-mock:**](https://www.npmjs.com/package/fetch-mock) Mocks the [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API).
- [**mock-local-storage:**](https://www.npmjs.com/package/mock-local-storage) Mocks the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) API.
- [**redux-mock-store:**](https://www.npmjs.com/package/redux-mock-store) A mock store for testing Redux async action creators and middleware.




## Development Libraries

- [**ngrok:**](https://www.npmjs.com/package/ngrok) Public URLs for exposing your local web server.
- [**nodemon:**](https://nodemon.io/) Automatically restarting the node application when file changes in the directory are detected. Generally not used for frontend development.
- [**eslint:**](https://eslint.org/) Enforces functional and cosmetic rules to a code base. Can integrate with a code editors linting plugin to provide MS Word-like suggestions (red / green underlines).
	- [**eslint-config-airbnb-base:**](https://www.npmjs.com/package/eslint-config-airbnb-base) Recommended style guide ***for non-react*** projects.
	- [**eslint-config-airbnb:**](https://www.npmjs.com/package/eslint-config-airbnb) Recommended style guide ***for react*** projects.
	- [**babel-eslint:**](https://www.npmjs.com/package/babel-eslint) Allows for linting of code supported by Babel not supported by your version of Node such as JSX.
- [**http-server:**](https://www.npmjs.com/package/http-server) Webserver that's useful when developing static websites. _Alternative [local-web-server](https://www.npmjs.com/package/local-web-server)_.
- [**shell-executor:**](https://www.npmjs.com/package/shell-executor) Execute shell commands in parallel. Particularly useful for [npm scripts](https://docs.npmjs.com/misc/scripts).


### [Babel](https://babeljs.io/)

Configurable JavaScript compiler that allows you to write JSX, and bleeding edge JavaScript code while compiling down to ES5.

- [**@babel/preset-env:**](https://babeljs.io/docs/en/babel-preset-env) Compiles the latest JavaScript down into ES5 or a targets defined by [Browserslist](https://github.com/browserslist/browserslist#browserslist-).
- [**@babel/polyfill:**](https://babeljs.io/docs/en/babel-polyfill) Adds polyfills for unsupported built-ins for compatibility with older browsers.
- [**@babel/preset-react:**](https://babeljs.io/docs/en/babel-preset-react) Compiles JSX into JavaScript.
- [**babel-plugin-module-resolver:**](https://www.npmjs.com/package/babel-plugin-module-resolver) Simplify the import paths in your project. _When used with [eslint](https://eslint.org/) pair with [this library](https://www.npmjs.com/package/eslint-import-resolver-babel-module)_.
- [**babel-plugin-transform-react-remove-prop-types**](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types) Remove unnecessary React propTypes from the production build.


### Module Bundlers

Implements modules at built time. In other words allows the use of `import` and `export` in your source code. Should only be used for frontend projects. NodeJS already has a module loader built into it.

- [**parcel-bundler:**](https://parceljs.org/) Requires zero configuration for all the features many projects would need.
- [**rollup:**](https://rollupjs.org/guide/en) Bundler popularly used for distributing libraries as standalone scripts.
- [**webpack:**](https://webpack.js.org/) The most popular and powerful module bundler.
	- [**Loaders:**](https://webpack.js.org/loaders) Transforms files as they are imported. Below are a list of loaders I commonly use.
		- [**babel-loader:**](https://webpack.js.org/loaders/babel-loader/) Transforms `import`ed JavaScript files with [Babel](https://babeljs.io/).
		- [**file-loader:**](https://webpack.js.org/loaders/file-loader/) Resolves `import` on a file into a url and emits the file into the output directory.
		- ***CSS Loaders:*** Recommended only when using a library such as [React](https://reactjs.org/) or [Vue](https://vuejs.org/) to ensure DOM class names are unique.
			- [**style-loader:**](https://webpack.js.org/loaders/style-loader) Adds CSS to the DOM.
			- [**css-loader:**](https://webpack.js.org/loaders/css-loader) Interprets `@import` and `url()` like `import`.
			- [**postcss-loader:**](https://webpack.js.org/loaders/postcss-loader) Process CSS with [PostCSS](https://postcss.org/).
			- [**sass-loader:**](https://webpack.js.org/loaders/sass-loader/) Process `.scss` files with [Sass](https://sass-lang.com/).
	- [**Plugins**](https://webpack.js.org/plugins)
		- [**html-webpack-webpack-plugin:**](https://webpack.js.org/plugins/html-webpack-plugin/) Creates an HTML file with all a bundles assets included into it's output such as `<script>` elements. Can be used with templating langauges.
		- [**mini-css-extract-webpack-plugin:**](https://webpack.js.org/plugins/mini-css-extract-plugin/) Create `.css` files when used with `style-loader` / `css-loader`.
		- [**webpack-bundle-analyzer:**](https://github.com/webpack-contrib/webpack-bundle-analyzer#usage-as-a-plugin) Represents bundle content as convenient interactive zoomable treemap.
		- [**favicons-webpack-plugin:**](https://www.npmjs.com/package/favicons-webpack-plugin) Generates all favicons.
		- [**case-sensitive-paths-webpack-plugin:**](https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin) Enforces the entire path of all required modules match the exact case of the actual path on disk. Using this plugin helps alleviate cases where developers working on macOS, which does not follow strict path case sensitivity, will cause conflicts with other developers or build boxes running other operating systems which require correctly cased paths.
	- [**webpack-merge:**](https://www.npmjs.com/package/webpack-merge) Merges sections of Webpack configurations that's particularly useful when configuring Webpack for particular environments.


### CSS Tools

- [**node-sass:**](https://www.npmjs.com/package/node-sass) Sass / SCSS to CSS compiler.
- [**postcss:**](https://postcss.org/) A tool for transforming CSS with JavaScript through plugins. Comparable to Babel but for CSS. Plugins can be found [here](https://github.com/postcss/postcss/blob/master/docs/plugins.md#packs) and [here](https://www.postcss.parts/).
	- [**autoprefixer:**](https://github.com/postcss/autoprefixer) Add vendor prefixes configurable via [Browserslist](https://github.com/browserslist/browserslist#browserslist-).
	- [**cssnano:**](https://cssnano.co/) Optimizes CSS for production environments.


### Generators

- [**create-react-app:**](https://facebook.github.io/create-react-app/) Generates a starting point for React projects.
- [**@vue/cli:**](https://cli.vuejs.org/) Standard tooling for [Vue.js](https://vuejs.org/) development.
- [**@ng/cli:**](https://cli.angular.io/) Standard tooling for [Angular](https://angular.io/).
- [**express-generator:**](https://expressjs.com/en/starter/generator.html) Use the application generator tool, express-generator, to quickly create an application skeleton.
- [**foundation-cli:**](https://www.npmjs.com/package/foundation-cli) Downloads and installs blank templates in any of the three Foundation frameworks.
- [**Yeoman:**](https://yeoman.io/generators/) Discover other generators that make use of the Yeoman generator framework.
