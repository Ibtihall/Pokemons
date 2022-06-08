import * as renderHelpers from '@testing-library/react';
import { renderWithIntl, Wrapper } from '../testing-helpers';

import React from 'react';

afterEach(renderHelpers.cleanup);

describe('renderWithIntl', () => {
  it('should call render and return rendered component', () => {
    jest.mock('@testing-library/react', () => () => ({ render: jest.fn() }));

    const { asFragment } = renderWithIntl(<h2>fake-render</h2>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Wrapper', () => {
  it('should render with defined wrapped elements', () => {
    const { asFragment } = renderHelpers.render(
      //@ts-ignore
      <Wrapper>
        <h1>fake-wrapper</h1>
      </Wrapper>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
