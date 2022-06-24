import '@testing-library/jest-dom'
import { expect, it, describe} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Scroll from './Scroll'

describe('Scroll', () => {
  it('should show icon scroll', () => {
    // Arrange
    render(<Scroll />)
    const scrollButton = screen.getByRole('button', {  name: /button scroll to top/i})
    // Assert
    expect(scrollButton).toBeDefined()
  })
})
