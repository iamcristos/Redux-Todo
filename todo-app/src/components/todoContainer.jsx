import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, toggleTodo, deleteTodo } from '../store/action/todoActions';
import Todos from './todos';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoInput = React.createRef();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onToggleTodoHandler = this.onToggleTodoHandler.bind(this);
    this.onDeleteTodoHandler = this.onDeleteTodoHandler.bind(this);
  }

  onSubmitHandler() {
    const todo = this.todoInput.current.value;
    if (todo.trim()) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addTodo(todo);
    }
  }

  onToggleTodoHandler(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.toggleTodo(id);
  }

  onDeleteTodoHandler(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.deleteTodo(id);
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h2>Todo App</h2>
        {todos.length ? (
          todos.map(todo => (
            <Todos
              key={todo.id}
              toggleTodo={this.onToggleTodoHandler}
              id={todo.id}
              todo={todo.value}
              completed={todo.completed}
              deleteTodo={this.onDeleteTodoHandler}
            />
          ))
        ) : <p>No Todo</p>}
        <div>
          <input
            type="text"
            ref={this.todoInput}
          />
          <button type="submit" onClick={this.onSubmitHandler}>Add Todo</button>
          <button type="submit">Remove Todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo,
});

const mapDispatchToProps = { addTodo, toggleTodo, deleteTodo };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);

Todo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.any).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
