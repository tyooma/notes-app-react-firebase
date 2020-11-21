import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import trash from '../img/trash.svg'
import pencil from '../img/pencil.svg'

export const Notes = ({ notes, onRemove }) => (
  <ul className="jumbotron background-animate">
    <TransitionGroup component="div" className="container list-group">
      {
        notes.map(note => (
          <CSSTransition
            key={note.id}
            classNames={'note'}
            timeout={300}
          >
            <li className="lead mb-4 note">
              <div className="note-text">
                {note.title}
              </div>
              <div className="ico-container">
                <img
                  src={pencil}
                  alt="edit"
                  className="ico"
                />
                <img
                  src={trash}
                  alt="trash"
                  className="ico"
                  onClick={() => onRemove(note.id)}
                />
              </div>
            </li>
          </CSSTransition>
        ))
      }
    </TransitionGroup>
  </ul>
)
