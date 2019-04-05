# Tools and Libraries

To install any of these libraries run `npm install <package-name>` or `npm install --save-dev <package-name>`.


***
- [General](#general)
- [Frontend](#frontend)
	- [React](#react)
	- [Rich Editors](#rich-editors)
	- [Polyfills](#polyfills)
- [Backend](#backend)
- [Dates and Times](#dates-and-times)
- [Testing](#testing)
- [Development Tools](#development-tools)
	- [Babel](#compilers)
	- [Module Bundlers](#module-bundlers)
	- [Generators](#generators)
***




## General

- [**axios:**](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js _(a better Fetch API)_.
- [**ramda:**](https://ramdajs.com/) Utility library with a functional programming lean. Similar to [lodash](https://lodash.com/).
- [**title-case:**](https://www.npmjs.com/package/title-case) Converts strings to and from _titleCase_.




## Frontend

- [**classnames:**](https://www.npmjs.com/package/classnamesq) Utility for conditionally joining classNames together. Popularly used with React and other VDOM libraries.
- [**font-awesome:**](https://fontawesome.com/) Vector icons and social logos.


### [React](https://reactjs.org)

- [**create-react-app:**](https://facebook.github.io/create-react-app/) Generates a starting point for React projects.
- [**prop-types:**](https://reactjs.org/docs/typechecking-with-proptypes.html) Runtime type checking for React props and similar objects.
	- [react-router-prop-types](https://www.npmjs.com/package/react-router-prop-types)
	- [react-moment-proptypes](https://www.npmjs.com/package/react-moment-proptypes)
- [**react-router:**](https://reacttraining.com/react-router/) Client-side router for conditionally rendering different components depending on the URL. This or another routing library is neccessary for any single page application.
- [**reactstrap:**](https://reactstrap.github.io/) React components for [Bootstrap v4](https://getbootstrap.com/) components. Recommended to use in a React project over regular [bootstrap](https://www.npmjs.com/package/bootstrap).
- [**react-table:**](https://www.npmjs.com/package/react-table) Datatable that can sort, filter, and more.

#### Form Inputs

- [**react-select:**](https://react-select.com/home) Fancy `<select>`.
- [**react-dates:**](http://airbnb.io/react-dates/) Date picker by Airbnb.
- [**rc-time-picker:**](https://react-component.github.io/time-picker/) Time picker.
- [**react-autosuggest:**](https://react-autosuggest.js.org/) Autocompleter.
- [**react-geosuggest:**](https://ubilabs.github.io/react-geosuggest/) Autocompleter using [Google Places API](https://developers.google.com/places/web-service/intro).
- [**react-dropzone:**](https://react-dropzone.js.org/) Drag'n'drop zone for files.
- [**react-ace:**](https://securingsincity.github.io/react-ace/) React component for the [ace editor](https://ace.c9.io/).
- [**react-color:**](https://casesandberg.github.io/react-color/) Colour picker inputs.


### Rich Editors

- [**brace:**](https://www.npmjs.com/package/brace) [Ace editor](https://ace.c9.io/).


### Polyfills

Implements standard features in environments that do not have them implemented yet.

- [**whatwg-fetch:**](https://www.npmjs.com/package/whatwg-fetch) Polyfill for the [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API).
- [**url-polyfill:**](https://www.npmjs.com/package/url-polyfill) Polyfills for the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) and [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) prototypes.




## Backend

- [**express:**](https://expressjs.com/) Fast, unopinionated, minimalist web framework for node.

- [**serve-favicon:**](https://www.npmjs.com/package/serve-favicon) HTTP server (Express) middleware for serving favicons.
- [**dotenv:**](https://www.npmjs.com/package/dotenv) Loads environment variables from a .env file.
- [**express-generator:**](https://expressjs.com/en/starter/generator.html) Use the application generator tool, express-generator, to quickly create an application skeleton.
- [**knex:**](https://knexjs.org/) SQL query builder that also deals with migrations and seeding.




## Dates and Times

- [**luxon:**](https://moment.github.io/luxon/) Official replacement for moment.
- [**moment:**](https://momentjs.com) Most popular utility library for dates.
- [**dayjs:**](https://github.com/iamkun/dayjs) 2KB immutable date library alternative to Moment.js with the same modern API.
- [**date-fns:**](https://date-fns.org/) Standalone functions for working with dates.





## Testing

- [**jest:**](https://jestjs.io/) Automated (unit) testing framework.
- [**enzyme:**](https://airbnb.io/enzyme/) Utility for testing React components.




## Development Tools

- [**nodemon:**](https://nodemon.io/) nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [**eslint:**](https://eslint.org/) Enforces functional and cosmetic rules to a code base. Can integrate with a code editors linting plugin to provide MS Word-like suggestions (red / green underlines).
	- [**eslint-config-airbnb-base:**](https://www.npmjs.com/package/eslint-config-airbnb-base) Recommended style guide ***for non-react*** projects.
	- [**eslint-config-airbnb:**](https://www.npmjs.com/package/eslint-config-airbnb) Recommended style guide ***for react*** projects.
	- [**babel-eslint:**](https://www.npmjs.com/package/babel-eslint) Allows for linting of code supported by Babel not supported by your version of Node such as JSX.
- [**local-web-server:**](https://www.npmjs.com/package/local-web-server) Webserver that's useful when developing static websites.
- [**http-server:**](https://www.npmjs.com/package/http-server) Webserver that's useful when developing static websites.


### [Babel](https://babeljs.io/)

Configurable JavaScript compiler that allows you to write JSX, and bleeding edge JavaScript code while compiling down to ES5.

- [**@babel/preset-env:**](https://babeljs.io/docs/en/babel-preset-env) Compiles the latest JavaScript down into ES5 or a targets defined by [browserslist](https://github.com/browserslist/browserslist#browserslist-).
- [**@babel/polyfill:**](https://babeljs.io/docs/en/babel-polyfill) Adds polyfills for unsupported built-ins for compatibility with older browsers.
- [**@babel/preset-react:**](https://babeljs.io/docs/en/babel-preset-react) Compiles JSX into JavaScript.
- [**babel-plugin-module-resolver:**](https://www.npmjs.com/package/babel-plugin-module-resolver) Simplify the import paths in your project. _When used with [eslint](https://eslint.org/) pair with [this library](https://www.npmjs.com/package/eslint-import-resolver-babel-module)_.
- [**babel-plugin-transform-react-remove-prop-types**](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types) Remove unnecessary React propTypes from the production build.


### Module Bundlers

***Should only be used for frontend projects. NodeJS already has a module loader built into it.***

- [**parcel-bundler:**](https://parceljs.org/) Requires zero configuration for all the features many projects would need.
- [**webpack:**](https://webpack.js.org/) The most popular and powerful module bundler.
	- [**Loaders:**](https://webpack.js.org/loaders) Transforms files as they are imported.
	- [**Plugins**](https://webpack.js.org/plugins)
		- [**html-webpack-webpack-plugin:**](https://webpack.js.org/plugins/html-webpack-plugin/) Creates an HTML file with all a bundles assets included into it's output such as `<script>` elements. Can be used with templating langauges.
		- [**mini-css-extract-webpack-plugin:**](https://webpack.js.org/plugins/mini-css-extract-plugin/) Create `.css` files when used with `style-loader` / `css-loader`.
		- [**favicons-webpack-plugin:**](https://www.npmjs.com/package/favicons-webpack-plugin) Generates all favicons.
- [**rollup:**](https://rollupjs.org/guide/en) Bundler popularly used for distributing libraries as standalone scripts.


### Generators

- [**create-react-app:**](https://facebook.github.io/create-react-app/) Generates a starting point for React projects.
- [**@vue/cli:**](https://cli.vuejs.org/) Standard tooling for [Vue.js](https://vuejs.org/) development
- [**express-generator:**](https://expressjs.com/en/starter/generator.html) Use the application generator tool, express-generator, to quickly create an application skeleton.
