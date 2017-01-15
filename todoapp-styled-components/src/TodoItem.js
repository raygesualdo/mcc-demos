import React from 'react'

const TodoItem = (props) => (
  <li className={`todo-item ${props.todo.completed && 'completed'}`}>
    <input
      className="toggle"
      type="checkbox"
      checked={props.todo.completed}
      onChange={props.onToggle}
    />
    <label className="todo-label">{props.todo.text}</label>
    <button className="destroy" onClick={props.onDestroy} />
  </li>
)

export default TodoItem
