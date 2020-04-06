import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import TestRouter from './TestRouter';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return (render(
    <Router history={history}>
      {component}
    </Router>
  ));
};

afterEach(cleanup);

test('should render the home page', async () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  const navbar = getByTestId('navbar');
  const link = getByTestId('home-link');
  expect(container.innerHTML).toMatch(/Home page/); // or
  expect(container).toHaveTextContent('Home page');
  expect(navbar).toContainElement(link);
  // console.log(container.innerHTML);
});

test('about-link to go to about-page', async () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  fireEvent.click(getByTestId('about-link'));
  expect(getByTestId('about-page')).toHaveTextContent('About page'); // or
  expect(container).toHaveTextContent('About page');
  expect(container.innerHTML).toMatch('About page');
  // console.log(container.innerHTML);
});

test('contact-link to go to contact-page', async () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  fireEvent.click(getByTestId('contact-link'));
  expect(getByTestId('contact-name')).toHaveTextContent('John Doe'); // or
  expect(container).toHaveTextContent('John Doe'); // or
  expect(container.innerHTML).toMatch('John Doe');
  // console.log(container.innerHTML);
});






