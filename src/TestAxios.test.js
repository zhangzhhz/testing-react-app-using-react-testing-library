import React from 'react';
import { render, waitFor, waitForElement, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';
import TestAxios from './TestAxios';

jest.mock('axios'); // asioxMock is a mocking for axios now.

it("should display a loading text", () => {
  const { getByTestId } = render(<TestAxios />);
  expect(getByTestId('loading')).toHaveTextContent('Loading...');
});

it('should load and display the data', async () => {
  const url = '/greeting';
  const { getByTestId } = render(<TestAxios url={url} />);

  axiosMock.get.mockResolvedValue({data: {greeting: "Howdy"}});

  fireEvent.click(getByTestId('fetch-data'));
  const divData = await waitForElement(() => getByTestId('show-data'));
  expect(divData).toHaveTextContent("Howdy");
  // const divData2 = await waitFor(() => getByTestId('show-data'));
  // expect(divData2).toHaveTextContent("Howdy");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});

