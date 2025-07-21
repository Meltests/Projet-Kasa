import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from '../components/Deroulant/collapse'

describe('Collapse component', () => {
   test('Affiche le titre correctement', () => {
      render(<Collapse title="Mon titre" />)
      expect(screen.getByText('Mon titre')).toBeInTheDocument()
   })

   test('Affiche le paragraphe après clic sur la flèche', () => {
      render(<Collapse title="Mon titre" paragraphe="Contenu du paragraphe" />)

      const arrow = screen.getByAltText('arrow icon')
      fireEvent.click(arrow)

      const paragraph = screen.getByText('Contenu du paragraphe')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toBeVisible()
   })

   test('Affiche les éléments de la liste', () => {
      const items = ['Élément 1', 'Élément 2']
      render(<Collapse title="Liste" liste={items} />)

      items.forEach((item) => {
         expect(screen.getByText(item)).toBeInTheDocument()
      })
   })
})
