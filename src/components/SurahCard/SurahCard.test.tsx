import '@testing-library/jest-dom'
import { expect, it, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SurahCard from './SurahCard'

describe('Surah Card', () => {
  it("should show the title based on the data from prop", () => {
    // Arrange 
    render(<SurahCard 
      name={'Al Fatihah'} 
      nameShort={'الفاتحة'} 
      translation={'Pembukaan'} 
      number={1} 
      numberOfVerses={7} 
    />)

    // Assert 
    expect(screen.getByRole('heading', {  name: /al fatihah/i})).toBeDefined()
    expect(screen.getByText(/pembukaan/i)).toBeDefined()
    expect(screen.getByText(/الفاتحة/i)).toBeDefined()
    expect(screen.getByText(/1/i)).toBeDefined()
    expect(screen.getByText(/7 ayat/i)).toBeDefined()
    
  })
})
