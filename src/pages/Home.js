import React, { useContext, useEffect } from 'react'

import { Form } from '../components/Form'
import { Loader } from '../components/Loader'
import { Notes } from '../components/Notes'

import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const {
    loading,
    notes,
    fetchNotes,
    removeNote,
    startEditNote,
    processEditNote,
    finishEditNote
  } = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Form />

      <hr />

      { 
        loading
        ? <Loader />
        : ( 
          notes.length === 0
          ? <h3 className="text-center">There are no notes yet</h3>
          : (
            <Notes
              notes={notes}
              onRemove={removeNote}
              onEditStart={startEditNote}
              onEditProcess={processEditNote}
              onEditFinish={finishEditNote}
            />
          )
        )
      }
    </>
  )
}
