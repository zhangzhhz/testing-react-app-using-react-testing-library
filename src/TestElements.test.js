import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import TestElement from './TestElements';

afterEach(cleanup);

test('element should have initial states when mounted for the first time', () => {
  const { getByTestId } = render(<TestElement />);
  expect(getByTestId('counter')).toHaveTextContent('0');
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
  expect(getByTestId('button-down')).toBeDisabled();
});

test('button-up should increase count', () => {
  const { getByTestId } = render(<TestElement />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('1');
});

test('button-down should not decrease count because the button is disabled', () => {
  const { getByTestId } = render(<TestElement />);
  fireEvent.click(getByTestId('button-down'));
  expect(getByTestId('counter')).toHaveTextContent('0');
});