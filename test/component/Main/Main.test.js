import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Main from '../../../src/component/Main';

describe('<Main />', () => {
  afterEach(() => {
    cleanup();
  });

  test('text', () => {
    const { getByTestId, } = render(<Main title="Hi" />);
    expect(getByTestId('title').innerHTML).toBe('Hi');
  });
});
