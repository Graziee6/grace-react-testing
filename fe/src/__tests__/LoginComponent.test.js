import { render, screen } from "@testing-library/react";
import LoginComponent from "../components/LoginComponent";

test("find 'Email' textbox", () => {
  render(<LoginComponent />);
  const emailTextBoxElement = screen.getByTestId("email");
  expect(emailTextBoxElement).toBeInTheDocument();
});

test("find 'Username' textbox", () => {
  render(<LoginComponent />);
  const emailTextBoxElement = screen.getByTestId("uname");
  expect(emailTextBoxElement).toBeInTheDocument();
});

test("find 'Password' textbox", () => {
  render(<LoginComponent />);
  const emailTextBoxElement = screen.getByTestId("passwd");
  expect(emailTextBoxElement).toBeInTheDocument();
});

test("checks login button", () => {
  render(<LoginComponent />);
  const btnCheck = screen.getByTestId("login-btn");
  expect(btnCheck).toBeInTheDocument();
});
