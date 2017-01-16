import React from 'react'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'
import styled from 'styled-components'

const Footer = styled.footer`
color: #777;
padding: 10px 15px;
height: 20px;
text-align: center;
border-top: 1px solid #e6e6e6;
&:before {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 50px;
	overflow: hidden;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
`
const TodoCount = styled.span`
float: left;
text-align: left;
`
const Filters = styled.ul`
margin: 0;
padding: 0;
list-style: none;
position: absolute;
right: 0;
left: 0;
`
const Filter = styled.li`
display: inline;
`
const FilterLink = styled.a`
color: inherit;
margin: 3px;
padding: 3px 7px;
text-decoration: none;
border: 1px solid transparent;
border-radius: 3px;
&:hover {
  border-color: rgba(175, 47, 47, 0.1);
}
${props => props.selected && 'border-color: rgba(175, 47, 47, 0.2);'}
`
const ClearCompleted = styled.button`
float: right;
position: relative;
line-height: 20px;
text-decoration: none;
cursor: pointer;
position: relative;
&:hover {
text-decoration: underline;
}
`

const TodoFooter = (props) => {
  const activeTodoWord = props.activeCount === 1 ? 'item' : 'items'
  const isAll = props.filter === ALL_TODOS
  const isActive = props.filter === ACTIVE_TODOS
  const isCompleted = props.filter === COMPLETED_TODOS
  return (
    <Footer>
      <TodoCount>
        {props.activeCount} {activeTodoWord} left
      </TodoCount>
      <Filters>
        <Filter>
          <FilterLink href="#/"
          selected={isAll}>
            All
          </FilterLink>
        </Filter>
        {' '}
        <Filter>
          <FilterLink href="#/active" selected={isActive}>
            Active
          </FilterLink>
        </Filter>
        {' '}
        <Filter>
          <FilterLink href="#/completed" selected={isCompleted}>
            Completed
          </FilterLink>
        </Filter>
      </Filters>
      {props.completedCount > 0 &&
        <ClearCompleted onClick={props.onClearCompleted}>
					Clear completed
				</ClearCompleted>
      }
    </Footer>
  )
}

export default TodoFooter
