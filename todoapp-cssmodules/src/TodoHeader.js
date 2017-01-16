import React from 'react'
import styles from './TodoHeader.css'

// styles = {
//   title: <hashed class name>,
//   'new-todo': <hashed class name>,
// }

const TodoHeader = (props) => (
  <header>
    <h1 className={styles.title}>todos</h1>
    <input
      className={styles['new-todo']}
      placeholder="What needs to be done?"
      value={props.value}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      autoFocus={true}
    />
  </header>
)

export default TodoHeader
