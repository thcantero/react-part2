import Router from "react-router";
Router.useParams = jest.fn();

import App from './App';
import axios from "axios"
import dogs from "./_testCommon"

import DogDetails from './DogDetails';

import { render, screen, waitFor } from '@testing-library/react';

jest.mock('axios');

test('renders learn react link', async () => {
  axios.get.mockResolvedValue({ data: dogs });
  const { container } = render(<App />);
  const heading = await waitFor(() => screen.findByText('Welcome!'));
  const nav = container.querySelector("nav")
  expect(nav).toBeInTheDocument()

  expect(heading).toBeInTheDocument();
  expect(axios.get).toHaveBeenCalled()
});
