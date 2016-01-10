# Master-react-exercise

## Note from [Mastering ReactJS](https://www.packtpub.com/web-development/mastering-reactjs-video)

Install the environment dependencies of React development, transpile our code, and view a React component in a browser.

- Install React, Browserify, and Babeljs via npm
- Learn about ES6 and JSX to transpile a code that is ready to run in a browser
- Write a Hello World component and view it in a browser

* * *

### Step1: write for package.json
	$ cd [folder route]
	$ **npm init**

- Input following information:   
description: **Mastering React example**
git repository: **https://github.com/Sweetymeow/Master-react-exercise.git**


### Step2: install react.js
	$ nam install —save react react-don babelify babel-preset-react
react-dom@0.14.3 node_modules/react-dom

### Step3: install [Browserify](http://browserify.org/)
Browserify lets you require(‘modules’) in the browser by bundling up all of your dependencies.
	$ nam install -g browserify

### Step4: install [Babel.js](https://babeljs.io/)
	$ nam install —save-dev babelify

OPEN package.json and add the “build” to “scripts” with following content:
#### ”build”: “browserify -t [ babelify —presets [ react ] ] src/main.js -o public/bundle.js”

it will look like i.e.

	“scripts”: {
		“test”: “echo \”Error: no test specified\” && exit 1”,
		”build”: “browserify -t [ babelify —presets [ react ] ] src/main.js -o public/bundle.js”
	}

- I update this command based on the [Install ReactJS from NPM - react docs](https://facebook.github.io/react/docs/getting-started.html)
  
### Step5: run script to create **bundle.js**
	$ npm run build

check bundle.js
	$ less public/bundle.js

### Step6: open html to test 
	$ open public/index.html

