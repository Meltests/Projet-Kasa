import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
   test('affiche le texte de copyright', () => {
      render(<Footer />)
      expect(screen.getByText(/© 2020 Kasa/i)).toBeInTheDocument()
   })
})
