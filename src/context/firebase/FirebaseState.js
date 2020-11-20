import React, { useReducer } from 'react'
import axios from 'axios'

import { FirebaseContext } from './firebaseContext'
import { FirebaseReducer } from './firebaseReducer'

import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types'

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

    console.log(res)
    
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

  const addNote = async title => {
    const note = {
      title,
      date: new Date().toJSON()
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

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({ type: REMOVE_NOTE, payload: id })
  }

  const [state, dispatch] = useReducer(FirebaseReducer, initialState)
  return (
    <FirebaseContext.Provider value={{
      showLoader,
      addNote,
      fetchNotes,
      removeNote,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
