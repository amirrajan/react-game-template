//fswatch test/tree.js test/tree-children.js | xargs -n1 -I{} mocha --compilers js:babel-register

import { uniqueId } from 'lodash';
import {
  sayHello
} from '../client/game.js';
import assert from 'assert';
import { fromJS } from 'immutable';

describe('game', function () {
  it('says hello', function() {
    assert.equal(sayHello(), 'Oh Hai!!!');
  });
});
