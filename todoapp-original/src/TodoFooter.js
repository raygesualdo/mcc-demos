import React from 'react'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'

const TodoFooter = (props) => {
  const activeTodoWord = props.activeCount === 1 ? 'item' : 'items'
  const isAll = props.filter === ALL_TODOS
  const isActive = props.filter === ACTIVE_TODOS
  const isCompleted = props.filter === COMPLETED_TODOS
  return (
    <footer className="footer">
      <span className="todo-count">
        {props.activeCount} {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className={isAll ? 'selected' : ''}>
            All
          </a>
        </li>
        {' '}
        <li>
          <a href="#/active" className={isActive ? 'selected' : ''}>
            Active
          </a>
        </li>
        {' '}
        <li>
          <a href="#/completed" className={isCompleted ? 'selected' : ''}>
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
