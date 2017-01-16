import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
`
const placeholderStyles = `
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
`
const NewTodo = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  outline: none;
  color: inherit;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  box-sizing: border-box;
  font-smoothing: antialiased;
  &::-webkit-input-placeholder { ${placeholderStyles} }
  &::-moz-placeholder { ${placeholderStyles} }
  &::input-placeholder { ${placeholderStyles} }
`

const TodoHeader = (props) => (
  <header>
    <Title>todos</Title>
    <NewTodo
      placeholder="What needs to be done?"
      value={props.value}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      autoFocus={true}
    />
  </header>
)

export default TodoHeader
