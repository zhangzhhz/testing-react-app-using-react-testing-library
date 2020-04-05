import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import TestAsync from './TestAsync';

afterEach(cleanup);

test('button-up should increase counter by 1 after 1 sec', async () => {
  const { getByTestId, getByText } = render(<TestAsync />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('0');
  const counter = await waitForElement(() => getByText('1'));
  expect(counter).toHaveTextContent('1');
});
