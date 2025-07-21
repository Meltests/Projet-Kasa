import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Banniere from '../components/Banner/banner'

const mockImageSrc = 'banniere.jpg'
const mockAltText = 'bannière'
const mockText = 'Bienvenue sur Kasa'

describe('Banniere component', () => {
   test("Affiche l'image avec le bon src et alt", () => {
      render(<Banniere image={mockImageSrc} />)

      const image = screen.getByAltText(mockAltText)
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', mockImageSrc)
   })

   test('Affiche le texte si fourni', () => {
      render(<Banniere image={mockImageSrc} texte={mockText} />)

      expect(screen.getByText(mockText)).toBeInTheDocument()
   })

   test("Ne rend pas le bloc de texte s'il n'y a pas de texte", () => {
      render(<Banniere image={mockImageSrc} />)

      expect(screen.queryByText(mockText)).not.toBeInTheDocument()
   })
})
