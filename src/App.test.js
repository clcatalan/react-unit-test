import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {sum} from './math';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Examining the syntax of Jest tests', () => {
   
  it('sums numbers', () => {
      expect(sum(1,2)).toEqual(3);
      expect(sum(2,2)).toEqual(4);
   });
});