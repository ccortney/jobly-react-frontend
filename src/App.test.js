import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";


test("should render without crashing", () => {
  render(<MemoryRouter><App/></MemoryRouter>)
});

test("should match snapshot", () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
})


