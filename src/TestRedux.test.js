import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent, getByText, getAllByTestId } from "@testing-library/react";
import { initialState, reducer } from '../store/reducer';
import TestRedux from './TestRedux';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

test('checks redux initial state is equal to 0', async () => {
  const { getByTestId } = renderWithRedux(<TestRedux />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

test('button-up increments counter through redux', () => {
  const { getByTestId } = renderWithRedux(<TestRedux />, { initialState: { count: 5 } });
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('6');
});

test('button-down decrement counter through redux', () => {
  const { getByTestId } = renderWithRedux(<TestRedux />, {
    initialState: { count: 100 },
  })
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('99')
});
