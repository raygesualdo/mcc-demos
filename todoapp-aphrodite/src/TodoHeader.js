import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  title: {
  	position: 'absolute',
  	top: '-155px',
  	width: '100%',
  	fontSize: '100px',
  	fontWeight: '100',
  	textAlign: 'center',
  	color: 'rgba(175, 47, 47, 0.15)',
  	textRendering: 'optimizeLegibility',
  },
  newTodo: {
  	position: 'relative',
  	margin: '0',
  	width: '100%',
  	fontSize: '24px',
  	fontFamily: 'inherit',
  	fontWeight: 'inherit',
  	lineHeight: '1.4em',
  	outline: 'none',
  	color: 'inherit',
  	padding: '16px 16px 16px 60px',
  	border: 'none',
  	background: 'rgba(0, 0, 0, 0.003)',
  	boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
  	boxSizing: 'border-box',
  	fontSmoothing: 'antialiased',
    '::-webkit-input-placeholder': {
      fontStyle: 'italic',
      fontWeight: '300',
      color: '#e6e6e6',
    },
    '::-moz-placeholder': {
      fontStyle: 'italic',
      fontWeight: '300',
      color: '#e6e6e6',
    },
    '::input-placeholder': {
      fontStyle: 'italic',
      fontWeight: '300',
      color: '#e6e6e6',
    },
  },
})

const TodoHeader = (props) => (
  <header>
    <h1 className={css(styles.title)}>todos</h1>
    <input
      className={css(styles.newTodo)}
      placeholder="What needs to be done?"
      value={props.value}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      autoFocus={true}
    />
  </header>
)

export default TodoHeader
