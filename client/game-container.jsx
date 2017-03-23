import { Component } from 'react';
import Guid from 'guid';

import {
  sayHello
} from './game.js';

import {
  map,
  filter,
  difference,
  last,
  debounce
} from 'lodash';

class GameContainer extends Component {
  constructor() {
    super();


    this.state = {
      wasChanged: false
    };
  }

  componentDidMount() {
    key('c', this.changed.bind(this));
  }

  changed() {
    this.setState({ wasChanged: true });
  }

  render() {
    if (this.state.wasChanged) {
      return (
        <div>
            The game is saying hello: {sayHello()}.
        </div>
      );
    }

    return (
      <div>
        Press 'c' to say hello.
      </div>
    );
  }
}

function initApp() {
  ReactDOM.render(
    <GameContainer />,
    document.getElementById('content')
  );
}

module.exports.initApp = initApp;
