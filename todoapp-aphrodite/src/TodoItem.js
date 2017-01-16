import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  todoItem: {
  	position: 'relative',
  	fontSize: '24px',
  	borderBottom: '1px solid #ededed',
  	':last-child': {
  		borderBottom: 'none',
  	},
  },
  toggle: {
  	textAlign: 'center',
  	width: '40px',
  	height: 'auto',
  	position: 'absolute',
  	top: '0',
  	bottom: '0',
  	margin: 'auto 0',
  	border: 'none',
  	appearance: 'none',
  	':after': {
  		content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')',
  	},
  	':checked:after': {
  		content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')',
  	},
  	'@media screen and (-webkit-min-device-pixel-ratio:0)': {
  		background: 'none',
  		height: '40px',
  	},
  },
  todoLabel: {
  	whiteSpace: 'pre-line',
  	wordBreak: 'break-all',
  	padding: '15px 60px 15px 15px',
  	marginLeft: '45px',
  	display: 'block',
  	lineHeight: '1.2',
  	transition: 'color 0.4s',
  },
  todoLabelCompleted: {
  	color: '#d9d9d9',
  	textDecoration: 'line-through',
  },
  destroy: {
  	display: 'block',
  	position: 'absolute',
  	top: '0',
  	right: '10px',
  	bottom: '0',
  	width: '40px',
  	height: '40px',
  	margin: 'auto 0',
  	fontSize: '30px',
  	color: '#cc9a9a',
  	marginBottom: '11px',
  	transition: 'color 0.2s ease-out',
  	':hover': {
  		color: '#af5b5e',
  	},
  	':after': {
  		content: '"×"',
  	},
  },
})

const TodoItem = (props) => (
  <li className={css(styles.todoItem)}>
    <input
      className={css(styles.toggle)}
      type="checkbox"
      checked={props.todo.completed}
      onChange={props.onToggle}
    />
    <label className={css([styles.todoLabel, props.todo.completed && styles.todoLabelCompleted])}>{props.todo.text}</label>
    <button className={css(styles.destroy)} onClick={props.onDestroy} />
  </li>
)

export default TodoItem
