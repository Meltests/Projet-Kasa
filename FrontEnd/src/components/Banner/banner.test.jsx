import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Banniere from '../Banner/banner'

describe('Banniere component', () => {
   test("Affiche l'image avec le bon src et alt", () => {
      render(<Banniere image="banniere.jpg" />)

      const image = screen.getByAltText('bannière')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', 'banniere.jpg')
   })

   test('Affiche le texte si fourni', () => {
      render(<Banniere image="banniere.jpg" texte="Bienvenue sur Kasa" />)

      expect(screen.getByText('Bienvenue sur Kasa')).toBeInTheDocument()
   })

   test("Ne rend pas le bloc de texte s'il n'y a pas de texte", () => {
      render(<Banniere image="banniere.jpg" />)

      expect(screen.queryByText('Bienvenue sur Kasa')).not.toBeInTheDocument()
   })
})
