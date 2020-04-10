# react-redux-express-ts-template

### Initialization 
First, run the following commands to ensure that all global and local dependencies are installed (or run `sh init.sh` on MacOS).

`npm install -g browserify watchify uglify babelify typescript`

`npm install`

Next, install Sass from [here](https://sass-lang.com/install). 

### Development

To start the development server with watchers, run `npm run dev` and wait for your bundle to build. The first bundle may take awhile. Navigate to `localhost:8080` in your browser to use with hot-reloader.

To test, run `npm test` to start the test watcher. Be sure to name your test file in a `<file-name>.test.<file-extension>` format.
 
### Production

To run the server with production build (which uses the production version of React and removes the redux-logger middleware), run `npm start`. 

###### Last updated date: 2019-06-07