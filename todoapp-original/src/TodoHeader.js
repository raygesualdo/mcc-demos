import React from 'react'

const TodoHeader = (props) => (
  <header>
    <h1 className="title">todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={props.value}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      autoFocus={true}
    />
  </header>
)

export default TodoHeader
