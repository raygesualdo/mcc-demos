import React from 'react'
import TodoItem from './TodoItem'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  main: {
  	position: 'relative',
  	zIndex: '2',
  	borderTop: '1px solid #e6e6e6',
  },
  toggleAll: {
  	position: 'absolute',
  	top: '-55px',
  	left: '-12px',
  	width: '60px',
  	height: '34px',
  	textAlign: 'center',
  	border: 'none',
    ':before': {
      content: '"❯"',
      fontSize: '22px',
      color: '#e6e6e6',
      padding: '10px 27px 10px 27px',
    },
    ':checked:before': {
      color: '#737373',
    },
    '@media screen and (-webkit-min-device-pixel-ratio:0)': {
      background: 'none',
      transform: 'rotate(90deg)',
      appearance: 'none',
    },
  },
  todoList: {
  	margin: '0',
  	padding: '0',
  	listStyle: 'none',
  },
})

const TodoList = (props) => {
  if (!props.todos.length) return null
  return (
    <section className={css(styles.main)}>
			<input
				className={css(styles.toggleAll)}
				type="checkbox"
				onChange={props.onToggleAll}
				checked={props.activeCount === 0}
			/>
			<ul className={css(styles.todoList)}>
				{props.todos.map(todo => (
          <TodoItem
						key={todo.id}
						todo={todo}
						onToggle={props.onToggle(todo)}
						onDestroy={props.onDestroy(todo)}
					/>
        ))}
			</ul>
		</section>
  )
}

export default TodoList
