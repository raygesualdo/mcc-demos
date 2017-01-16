import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const Main = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`
const ToggleAll = styled.input`
  position: absolute;
  top: -55px;
  left: -12px;
  width: 60px;
  height: 34px;
  text-align: center;
  border: none;
  &:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
  &:checked:before {
    color: #737373;
  }
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    background: none;
    transform: rotate(90deg);
    appearance: none;
  }
`
const TodoUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const TodoList = (props) => {
  if (!props.todos.length) return null
  return (
    <Main>
			<ToggleAll
				type="checkbox"
				onChange={props.onToggleAll}
				checked={props.activeCount === 0}
			/>
			<TodoUl>
				{props.todos.map(todo => (
          <TodoItem
						key={todo.id}
						todo={todo}
						onToggle={props.onToggle(todo)}
						onDestroy={props.onDestroy(todo)}
					/>
        ))}
			</TodoUl>
		</Main>
  )
}

export default TodoList
