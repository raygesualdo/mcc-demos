import React from 'react'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'

const TodoFooter = (props) => {
  const activeTodoWord = props.activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        {props.activeCount} {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className={props.filter === ALL_TODOS ? 'selected' : ''}>
            All
          </a>
        </li>
        {' '}
        <li>
          <a href="#/active" className={props.filter === ACTIVE_TODOS ? 'selected' : ''}>
            Active
          </a>
        </li>
        {' '}
        <li>
          <a href="#/completed" className={props.filter === COMPLETED_TODOS ? 'selected' : ''}>
            Completed
          </a>
        </li>
      </ul>
      {props.completedCount > 0 &&
        <button className="clear-completed" onClick={props.onClearCompleted}>
					Clear completed
				</button>
      }
    </footer>
  )
}

export default TodoFooter
