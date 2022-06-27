import '@testing-library/jest-dom'
import { expect, it, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'

describe("Navbar", () => {
  it("should show title all the time", () => {
    // Arrange
    render(
      <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    );
    const headingText = screen.getByRole('heading', { name: /al qur'an/i })
    
    // Assert
    expect(headingText).toBeDefined()
  })

  // it("should show input element", () => {
  //   // Arrange 
  //   render(<Navbar />)
  //   const inputFieldSurah = screen.getByRole('textbox')

  //   // Assert 
  //   expect(inputFieldSurah).toBeDefined()
  // })

  // it("should show input from user act ", () => {
  //   // Arrange 
  //   render(<Navbar />)
  //   const inputFieldSurah = screen.getByRole('textbox')
    
  //   // Assert
  //   expect(inputFieldSurah).toHaveValue("")
  //   fireEvent.change(inputFieldSurah, {target : {value : 'surah al-fatihah'}})
  //   expect(inputFieldSurah).toHaveValue("surah al-fatihah")
  //   fireEvent.change(inputFieldSurah, {target : {value : ''}})
  //   expect(inputFieldSurah).toHaveValue("")
  // })
})

