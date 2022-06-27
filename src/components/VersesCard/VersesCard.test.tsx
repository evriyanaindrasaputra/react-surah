import '@testing-library/jest-dom'
import { expect, it, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import VersesCard from './VersesCard';

describe('VersesCard', () => {
  it("should show the title based on the data from prop", () => {
    render(<VersesCard verse={}    />)
  })
})

