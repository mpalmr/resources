# Resources for Web Development

TODO


***
- [JavaScript](#javascript)
    - [Tutorials](#tutorials)
	- [Coding Style](#coding-style)
- [Libraries](#libraries)
- [Frontend](#frontend)
	- [CSS](#css)
    - [AJAX and Fetch](#ajax-and-fetch)
    - [React](#react)
- [Backend](#backend)
	- [Express](#express)
- [HTTP](#http)
- [Tooling](#tooling)
    - [Code Editors](#code-editors)
    - [Troubleshooting](#troubleshooting)
    - [Git](#git)
	- [Command Line](#command-line)
- [Miscellaneous](#miscellaneous)
	- [Resource Lists](#resources-lists)
***




## JavScript

[Specific topics](https://github.com/mpalmr/resources/blob/master/javascript.md)


### Tutorials

- [The Modern Javascript Tutorial](https://javascript.info/)
- [Eloquent JavaScript <small>3<sup>rd</sup> edition</small>](https://eloquentjavascript.net/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)


### Coding Style

- [eslint](https://eslint.org/)
    - [Recommended Style Guide](https://www.npmjs.com/package/eslint-config-airbnb-base)
		- [`.eslintrc.js`](https://github.com/mpalmr/resources/blob/master/config-resources/eslint/eslint-config-airbnb-base.js)
    - [Recommend Style Guide for React](https://www.npmjs.com/package/eslint-config-airbnb)
    - **Code Editor Plugins**
        - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
        - [Atom](https://atom.io/packages/linter-eslint)
        - [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-eslint)
- [Editorconfig](https://editorconfig.org/)
    - [`.editorconfig`](https://github.com/mpalmr/resources/blob/master/config-resources/.editorconfig)
    - **Code Editor Plugins**
        - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
        - [Atom](https://atom.io/packages/editorconfig)
        - [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime)
- [Ninja Code – A Style Guide Parody](https://javascript.info/ninja-code)




## Libraries

To install any of these libraries run `npm install <package-name>`

- [**axios:**](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js _(a better Fetch API)_.
- [**express:**](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework for node.
- [**serve-favicon:**](https://www.npmjs.com/package/serve-favicon) HTTP server (Express) middleware for serving favicons.
- [**dotenv:**](https://www.npmjs.com/package/dotenv) Loads environment variables from a .env file.


### Templating Languages

Dynamically generate HTML for HTTP servers (Express).

- [ejs](https://www.npmjs.com/package/ejs)
- [pug](https://www.npmjs.com/package/pug)
- [handlebars](https://www.npmjs.com/package/handlebars)


### Developer Dependencies

To install any of these libraries run `npm install --save-dev <package-name>`

- [**nodemon:**](https://www.npmjs.com/package/nodemon) nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [**jest:**](https://www.npmjs.com/package/jest) Automated (unit) testing framework
- [**eslint-config-airbnb-base:**](https://www.npmjs.com/package/eslint-config-airbnb-base)


### Other Dependencies

- [**create-react-app:**](https://www.npmjs.com/package/create-react-app) Generates a starting point for React projects




## Frontend

### HTML

- [Validator](https://whatwg.org/validator/)


### CSS

- [Validator](https://jigsaw.w3.org/css-validator/)
- [Flexbox Frogger](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)


### AJAX and Fetch

- [How to use the Fetch API to Get Data](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)


### React

- [Official Tutorial](https://reactjs.org/tutorial/tutorial.html)




## Backend

### Express

- [Default errors handlers](https://expressjs.com/en/guide/error-handling.html#the-default-error-handler)




## HTTP

- [Status Code Cheat Sheet](https://www.restapitutorial.com/httpstatuscodes.html)
- [Headers – MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)




## Tooling

- [Node Version Manager](https://github.com/creationix/nvm/blob/master/README.md#installation-and-update)
- [Windows Subsystem for Linux _(WSL)_](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Create React App](https://github.com/facebook/create-react-app)
- [Babel](https://babeljs.io/)
- **Module Bundlers**
	- [Webpack](https://webpack.js.org/)
	- [Parcel](https://parceljs.org)


### Code Editors

- [Visual Studio Code (Recommended)](https://code.visualstudio.com/)
	- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
	- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
	- [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
	- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [Atom](https://atom.io)
- [Sublime Text](https://www.sublimetext.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)


### Troubleshooting

- [Blink (Chrome) Debugger](https://www.youtube.com/watch?time_continue=1&v=H0XScE08hy8)
- [Postman HTTP Client](https://www.getpostman.com/)


### Git

- [Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)

#### Tutorials
- [Git Immersion](http://gitimmersion.com/)
- [Resources to Learn Git](https://try.github.io/)

#### Articles
- [New Developer? You should’ve learned Git yesterday.](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa)
- [Git makes software development, well, easier – Atlassian](https://www.atlassian.com/agile/software-development/git)
- [The Git Parable](http://tom.preston-werner.com/2009/05/19/the-git-parable.html)
- [The Case for Git Rebase](http://www.darwinweb.net/articles/the-case-for-git-rebase)

#### Repository Hosting Services
- [GitHub](https://github.com)
- [GitLab](https://gitlab.com/)
- [BitBucket](https://bitbucket.org/)




## Miscellaneous

- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [Rico's Cheatsheets](https://devhints.io/)
- **Markdown Cheatsheet's**
	- [Markdown Guide](https://www.markdownguide.org/cheat-sheet/)
	- [Adam P](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


### Resource Lists
`- [Free Programming Books](https://ebookfoundation.github.io/free-programming-books/free-programming-books.html)
- [Free Programming Playgrounds](https://ebookfoundation.github.io/free-programming-books/free-programming-playgrounds.html)
- [Public APIs](https://github.com/toddmotto/public-apis#index)`
