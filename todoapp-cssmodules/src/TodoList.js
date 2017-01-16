import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.css'

const TodoList = (props) => {
  if (!props.todos.length) return null
  return (
    <section className={styles.main}>
			<input
				className={styles['toggle-all']}
				type="checkbox"
				onChange={props.onToggleAll}
				checked={props.activeCount === 0}
			/>
			<ul className={styles['todo-list']}>
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
