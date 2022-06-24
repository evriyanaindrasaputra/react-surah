import '@testing-library/jest-dom'
import { expect, it, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from './Footer'

describe("Navbar", () => {
  it("should show title all the time", () => {
    // Arrange
    render(<Footer />)
    const textFooter = screen.getByText(/qur'an digital with ❤️/i)

    // Assert
    expect(textFooter).toBeDefined()
  })
})
