import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import store from '../store';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';

export const Wrapper: React.FC = (props:any): JSX.Element => {
  return (
    <Provider store={store}>
      {//@ts-ignore
      <Router>
        {props.children} 
      </Router>}
    </Provider>
  );
};


export const renderWithIntl = (
  ui: ReactElement,
  renderOptions?: RenderOptions,
) => {
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export const renderHookWithIntl = <P, R>(hook: (props: P) => R) => {
  return renderHook(hook, { wrapper: Wrapper });
};
