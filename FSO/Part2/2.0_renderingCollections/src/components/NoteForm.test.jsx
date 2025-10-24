import { render, screen } from '@testing-library/react'
import NoteForm from './NoteForm'
import userEvent from '@testing-library/user-event'

test('<NoteForm /> updates parent state and calls onSubmit', async () => {
  const createNote = vi.fn()
  const user = userEvent.setup()

  const { container } = render(<NoteForm createNote={createNote} />)
  // render(<NoteForm createNote={createNote} />)

  // const input = screen.getByRole('textbox')  // get the input element by its role
  // const input = screen.getByPlaceholderText('write note content here') // get the input element by its placeholder text
  const input = container.querySelector('#note-input') // get the input element by its id
  const sendButton = screen.getByText('save')

  await user.type(input, 'testing a form...')
  await user.click(sendButton)

  console.log(createNote.mock.calls)

  expect(createNote.mock.calls).toHaveLength(1)
  expect(createNote.mock.calls[0][0].content).toBe('testing a form...')
})
