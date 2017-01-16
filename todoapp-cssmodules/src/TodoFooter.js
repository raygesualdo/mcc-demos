import React from 'react'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'
import styles from './TodoFooter.css'

const TodoFooter = (props) => {
  const activeTodoWord = props.activeCount === 1 ? 'item' : 'items'
  const isAll = props.filter === ALL_TODOS
  const isActive = props.filter === ACTIVE_TODOS
  const isCompleted = props.filter === COMPLETED_TODOS
  return (
    <footer className={styles.footer}>
      <span className={styles['todo-count']}>
        {props.activeCount} {activeTodoWord} left
      </span>
      <ul className={styles.filters}>
        <li className={styles.filter}>
          <a href="#/" className={`${styles['filter-link']} ${isAll && styles.selected  }`}>
            All
          </a>
        </li>
        {' '}
        <li className={styles.filter}>
          <a href="#/active" className={`${styles['filter-link']} ${isActive && styles.selected}`}>
            Active
          </a>
        </li>
        {' '}
        <li className={styles.filter}>
          <a href="#/completed" className={`${styles['filter-link']} ${isCompleted && styles.selected}`}>
            Completed
          </a>
        </li>
      </ul>
      {props.completedCount > 0 &&
        <button className={styles['clear-completed']} onClick={props.onClearCompleted}>
					Clear completed
				</button>
      }
    </footer>
  )
}

export default TodoFooter
