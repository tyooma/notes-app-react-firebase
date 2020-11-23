import { ADD_NOTE, FETCH_NOTES, FINISH_EDIT_NOTE, PROCESS_EDIT_NOTE, REMOVE_NOTE, SHOW_LOADER, START_EDIT_NOTE } from "../types"

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, { payload }) => ({
    ...state,
    notes: payload,
    loading: false
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  [START_EDIT_NOTE]: (state, payload) => ({
    ...state,
    notes: state.notes.map(note => note.id === payload.note.id ? { ...note, editing: true } : note)
  }),
  [PROCESS_EDIT_NOTE]: (state, payload) => {
    return {
      ...state,
      notes: state.notes.map(note => note.editing ? { ...note, title: payload.text } : note)
    }
  },
  [FINISH_EDIT_NOTE]: (state, payload) => ({
    ...state,
    notes: state.notes.map(note => note.id === payload.id ? { ...note, editing: false } : note)
  }),
  DEFAULT: state => state
}

export const FirebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
