import '@testing-library/jest-dom'
import { expect, it, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Hero from './Hero'

describe("Navbar", () => {
  it("should show title all the time", () => {
    // Arrange
    render(<Hero />);
    const imageHero = screen.getByRole('img', {  name: /quran kareem/i})
    
    // Assert
    expect(imageHero).toBeDefined()
  })

  it("should show input element", () => {
    // Arrange 
    render(<Hero />)
    const inputFieldSurah = screen.getByRole('textbox')

    // Assert 
    expect(inputFieldSurah).toBeDefined()
  })

  it("should show input from user act ", () => {
    // Arrange 
    render(<Hero />)
    const inputFieldSurah = screen.getByRole('textbox')
    
    // Assert
    expect(inputFieldSurah).toHaveValue("")
    fireEvent.change(inputFieldSurah, {target : {value : 'surah al-fatihah'}})
    expect(inputFieldSurah).toHaveValue("surah al-fatihah")
    fireEvent.change(inputFieldSurah, {target : {value : ''}})
    expect(inputFieldSurah).toHaveValue("")
  })

  it("should show search icon", () => {
    // Arrange 
    render(<Hero />)
    const searchIcon = screen.getByTestId('search icon surah')

    // Assert
    expect(searchIcon).toBeDefined()
  })
})

