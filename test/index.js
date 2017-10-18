import 'babel-polyfill';
import Palette from '../src';
import React from 'react';
import chai from 'chai';
chai.should();
describe('Palette', () => {

  it('renders a React element', () => {
    React.isValidElement(<Palette />).should.equal(true);
  });

});
