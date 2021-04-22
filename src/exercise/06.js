// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // const [errorMessage, setErrorMessage] = React.useState(null)

  const [inputLowercase, setInputLowercase] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // const value = event.target.elements.user.value
    onSubmitUsername(inputLowercase)
  }

  // const handleChange = event => {
  //   const value = event.target.value
  //   const isValid = value === value.toLowerCase()
  //   setErrorMessage(
  //     isValid ? null : 'Brukernavnet kan ikke inneholde store bokstaver!',
  //   )
  // }

  const handleChange = event => {
    const {value} = event.target
    setInputLowercase(value.toLowerCase())
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Username:</label>
        <input
          id="user"
          type="text"
          onChange={handleChange}
          value={inputLowercase}
        />
        {/* <p role="alert" style={{color: 'red', fontStyle: 'italic'}}>
          {errorMessage}
        </p> */}
      </div>
      {/* <button type="submit" disabled={Boolean(errorMessage)}> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
