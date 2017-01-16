import React from 'react'
import styles from './TodoItem.css'

const TodoItem = (props) => (
  <li className={`${styles['todo-item']} ${props.todo.completed && styles.completed}`}>
    <input
      className={styles.toggle}
      type="checkbox"
      checked={props.todo.completed}
      onChange={props.onToggle}
    />
    <label className={styles['todo-label']}>{props.todo.text}</label>
    <button className={styles.destroy} onClick={props.onDestroy} />
  </li>
)

export default TodoItem
