A starting point for building non-canvas games in React.

To build and work with locally:

- Run `npm install mocha -g`.
- Run `npm install`.
- In a window run `webpack --watch` to do es6 front end compliation.
- In another window run `node server.js` to start the server.

Heroku deploy:

- Install heroku toolbelt: https://toolbelt.heroku.com/
- Run `heroku login`.
- Run `heroku apps:create [YOURAPPNAME]`.
- Run `git push heroku master`.
- Run `heroku open`.

Optional but awesome:

Unit testing:

- Run tests with `mocha --compilers js:babel-register`.
- To auto test `brew install fswatch`.
- In another window run `fswatch test/game.js | xargs -n1 -I{} mocha --compilers js:babel-register`.

UI testing:

- Install Mono MDK [from here (32 bit)](http://www.mono-project.com/download/).
- Run `export CHROME_LOG_FILE="chrome_debug.log"` (or put it in your `.bashrc`/`.bash_profile`).
- Run `cd canopy-repl`.
- Run `sh ./build.sh`.
- Run automation tests with `fsharpi --exec "Tests.fsx"`.
