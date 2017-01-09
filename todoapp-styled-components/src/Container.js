import { Component, PropTypes } from 'react';
import uuid from 'uuid/v4'
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS, ENTER_KEY } from './constants'

class Container extends Component {
  state = {
    filter: ALL_TODOS,
    newTodo: '',
    todos: []
  }

  componentDidMount = () => {
    window.addEventListener('hashchange', e => {
      this.handleSetFilter()
    })
    this.handleSetFilter()
  }

  handleSetFilter = () => {
    switch (window.location.hash) {
      case '#/active':
        this.setState({filter: ACTIVE_TODOS})
        break
      case '#/completed':
        this.setState({filter: COMPLETED_TODOS})
        break
      default:
        this.setState({filter: ALL_TODOS})
    }
  }

  handleNewTodoChange = (e) => {
    this.setState({newTodo: e.target.value})
  }

  handleNewTodoKeyDown = (e) => {
    if (e.keyCode !== ENTER_KEY) return
    const val = this.state.newTodo.trim()
    if (val) {
      this.addTodo(val)
      this.setState({newTodo: ''})
    }
  }

  addTodo = (text) => {
    this.setState(state => ({
      todos: [
        {
          id: uuid(),
          text,
          completed: false
        },
        ...this.state.todos
      ]
    }))
  }

  handleToggleAll = (e) => {
    const completed = e.target.checked
    this.setState(state => ({
      todos: state.todos.map(todo => {
        todo.completed = completed
        return todo
      })
    }))
  }

  handleToggle = (todoToToggle) => (e) => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id !== todoToToggle.id) return todo
        todo.completed = !todo.completed
        return todo
      })
    }))
  }

  handleDestroy = (todoToDestroy) => (e) => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== todoToDestroy.id)
    }))
  }

  handleClearCompleted = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.completed)
    }))
  }

  getVisibleTodos = () => {
    return this.state.todos.filter(todo => {
      switch (this.state.filter) {
        case ACTIVE_TODOS:
          return !todo.completed
        case COMPLETED_TODOS:
          return todo.completed
        default:
          return true
      }
    })
  }

  getCounts = () => {
    const activeCount = this.state.todos.reduce((sum, todo) => {
      return todo.completed ? sum : sum + 1
    }, 0)
    const completedCount = this.state.todos.length - activeCount
    return { activeCount, completedCount }
  }

  render() {
    const state = {
      ...this.state,
      ...this.getCounts(),
      visibleTodos: this.getVisibleTodos(),
    }
    const actions = {
      handleNewTodoChange: this.handleNewTodoChange,
      handleNewTodoKeyDown: this.handleNewTodoKeyDown,
      handleToggleAll: this.handleToggleAll,
      handleToggle: this.handleToggle,
      handleDestroy: this.handleDestroy,
      handleClearCompleted: this.handleClearCompleted
    }
    return this.props.children({ state, actions })
  }
}

Container.propTypes = {
  children: PropTypes.func.isRequired
}

export default Container;
