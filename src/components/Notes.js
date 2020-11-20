import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {
      notes.map(note => (
        <CSSTransition
          key={note.id}
          classNames={'note'}
          timeout={300}
        >
          <li className="list-group-item note">
            <div className="note-text">
              {note.title}
            </div>
            <button
              type="button"
              className="btn btn-outline-danger b-text"
              onClick={() => onRemove(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))
    }
  </TransitionGroup>
)
