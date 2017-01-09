import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  if (!props.todos.length) return null
  return (
    <section className="main">
			<input
				className="toggle-all"
				type="checkbox"
				onChange={props.onToggleAll}
				checked={props.activeCount === 0}
			/>
			<ul className="todo-list">
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
