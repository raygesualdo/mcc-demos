import React from 'react';
import Container from './Container'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import ReactLogo from './ReactLogo'

const App = () => (
  <Container>
    {({state, actions}) => (
      <div>
        <TodoHeader
          value={state.newTodo}
          onKeyDown={actions.handleNewTodoKeyDown}
          onChange={actions.handleNewTodoChange}
        />
        <TodoList
          todos={state.visibleTodos}
          activeCount={state.activeCount}
          onToggleAll={actions.handleToggleAll}
          onToggle={actions.handleToggle}
          onDestroy={actions.handleDestroy}
        />
        <TodoFooter
					activeCount={state.activeCount}
					completedCount={state.completedCount}
					filter={state.filter}
					onClearCompleted={actions.handleClearCompleted}
				/>
        <ReactLogo />
      </div>
    )}
  </Container>
)

export default App;
