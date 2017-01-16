import React from 'react'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  footer: {
  	color: '#777',
  	padding: '10px 15px',
  	height: '20px',
  	textAlign: 'center',
  	borderTop: '1px solid #e6e6e6',
  	':before': {
  		content: '""',
  		position: 'absolute',
  		right: '0',
  		bottom: '0',
  		left: '0',
  		height: '50px',
  		overflow: 'hidden',
  		boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2)',
  	},
  },
  todoCount: {
  	float: 'left',
  	textAlign: 'left',
  },
  filters: {
  	margin: '0',
  	padding: '0',
  	listStyle: 'none',
  	position: 'absolute',
  	right: '0',
  	left: '0',
  },
  filter: {
  	display: 'inline',
  },
  filterLink: {
  	color: 'inherit',
  	margin: '3px',
  	padding: '3px 7px',
  	textDecoration: 'none',
  	border: '1px solid transparent',
  	borderRadius: '3px',
  	':hover': {
  		borderColor: 'rgba(175, 47, 47, 0.1)',
  	},
  },
  filterLinkSelected: {
  	borderColor: 'rgba(175, 47, 47, 0.2)',
  },
  clearCompleted: {
  	float: 'right',
  	position: 'relative',
  	lineHeight: '20px',
  	textDecoration: 'none',
  	cursor: 'pointer',
  	':hover': {
  		textDecoration: 'underline',
  	},
  },
})

const TodoFooter = (props) => {
  const activeTodoWord = props.activeCount === 1 ? 'item' : 'items'
  const isAll = props.filter === ALL_TODOS
  const isActive = props.filter === ACTIVE_TODOS
  const isCompleted = props.filter === COMPLETED_TODOS
  return (
    <footer className={css(styles.footer)}>
      <span className={css(styles.todoCount)}>
        {props.activeCount} {activeTodoWord} left
      </span>
      <ul className={css(styles.filters)}>
        <li className={css(styles.filter)}>
          <a href="#/" className={css([styles.filterLink, isAll && styles.filterLinkSelected])}>
            All
          </a>
        </li>
        {' '}
        <li className={css(styles.filter)}>
          <a href="#/active" className={css([styles.filterLink, isActive && styles.filterLinkSelected])}>
            Active
          </a>
        </li>
        {' '}
        <li className={css(styles.filter)}>
          <a href="#/completed" className={css([styles.filterLink, isCompleted && styles.filterLinkSelected])}>
            Completed
          </a>
        </li>
      </ul>
      {props.completedCount > 0 &&
        <button className={css(styles.clearCompleted)} onClick={props.onClearCompleted}>
					Clear completed
				</button>
      }
    </footer>
  )
}

export default TodoFooter
