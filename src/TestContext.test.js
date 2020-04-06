import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import CounterProvider, { CounterContext, Counter } from './TestContext';

const renderWithContext = (component) => {
  return(
    render(
      <CounterProvider value = { CounterContext } >
        { component }
      </CounterProvider>
    )
  );
};

afterEach(cleanup);

test('checks if initial state is equal to 0', async () => {
  const { getByTestId } = renderWithContext(<Counter />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

test('increments the counter', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('1');
});

test('decrements the counter', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId('button-down'));
  expect(getByTestId('counter')).toHaveTextContent('-1');
});


