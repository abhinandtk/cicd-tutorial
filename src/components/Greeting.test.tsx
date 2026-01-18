import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("renders provided name", () => {
  render(<Greeting name="Ada" />)
  expect(screen.getByRole("heading", { name: "Hello,Ada" })).toBeInTheDocument()
})

test("renders Guest when name is empty", () => {
  render(<Greeting name="" />)
  expect(screen.getByRole("heading", { name: "Hello,Guest" })).toBeInTheDocument()
})
