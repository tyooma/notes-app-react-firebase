import React, { useState, useContext } from 'react'

import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = e => {
    e.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim())
        .then(() => {
        alert.show('The note was successfully created', 'success')
      })
        .catch(() => {
          alert.show('Something went wrong', 'danger')
        })
      setValue('')
    } else {
      alert.show('Enter the note title')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={value}
          onChange={e => setValue(e.target.value)}
          maxLength={144}
        />
      </div>
    </form>
  )
}
