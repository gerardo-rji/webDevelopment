import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  render(<Note note={note} />)

  const element = screen.getByText(
    'Component testing is done with react-testing-library', { exact: false } // exact: false means that the text can be anywhere in the note
  )
  // const element = await screen.findByText('Component testing is done with react-testing-library') // findBy... is a promise

  screen.debug(element)         // prints the HTML element to the console

  expect(element).toBeDefined() // checks if the element is defined

  /*
  // CSS-selectors
  const { container } = render(<Note note={note} />)

  const div = container.querySelector('.note')
  expect(div).toHaveTextContent('Component testing is done with react-testing-library')
  */
})

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = vi.fn()

  render(<Note note={note} toggleImportance={mockHandler} />)

  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('does not render this', () => {
  const note = {
    content: 'this is a reminder',
    important: true
  }

  render(<Note note={note} />)

  const element = screen.queryByText('do not want this thing to be rendered') // queryByText does not throw an error if the element is not found
  expect(element).toBeNull()
})
