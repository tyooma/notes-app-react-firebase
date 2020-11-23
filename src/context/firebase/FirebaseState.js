import React, { useReducer } from 'react'
import axios from 'axios'

import { FirebaseContext } from './firebaseContext'
import { FirebaseReducer } from './firebaseReducer'

import {
  ADD_NOTE,
  FETCH_NOTES,
  REMOVE_NOTE,
  SHOW_LOADER,
  START_EDIT_NOTE,
  PROCESS_EDIT_NOTE,
  FINISH_EDIT_NOTE
} from '../types'

const url = 'https://tyooma-notes-extended.firebaseio.com'

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchNotes = async () => {
    showLoader()

    const res = await axios.get(`${url}/notes.json`)
    
    if (res.data) {
      const payload = Object.keys(res.data).map(key => {
        return {
          ...res.data[key],
          id: key
        }
      })

      dispatch({ type: FETCH_NOTES, payload })
    } else {
      const payload = []
      dispatch({ type: FETCH_NOTES, payload })
    }
  
  }

  /*Add*/
  const addNote = async title => {
    const note = {
      title,
      date: new Date().toJSON(),
      editing: false
    }

    try {
      const res = await axios.post(`${url}/notes.json`, note)
      const payload = {
        ...note,
        id: res.data.name
      }

      dispatch({ type: ADD_NOTE, payload })
    } catch (e) {
      throw new Error(e.message)
    }
  }

  /*Remove*/
  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({ type: REMOVE_NOTE, payload: id })
  }

  /*Edit*/
  const startEditNote = note => dispatch({ type: START_EDIT_NOTE, note })

  const processEditNote = text => dispatch({ type: PROCESS_EDIT_NOTE, text })

  const finishEditNote = async (key, note) => {
    if (key === 'Enter') {
      await axios.put(`${url}/notes/${note.id}.json`, { ...note, editing: false })

      dispatch({ type: FINISH_EDIT_NOTE, payload: note })
      fetchNotes()
    }
  }

  const [state, dispatch] = useReducer(FirebaseReducer, initialState)
  return (
    <FirebaseContext.Provider value={{
      showLoader,
      addNote,
      fetchNotes,
      removeNote,
      startEditNote,
      processEditNote,
      finishEditNote,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
