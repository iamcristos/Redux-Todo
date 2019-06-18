/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Div from './styles/div';

const Todos = (props) => {
  const {
    todo, completed, id, toggleTodo, deleteTodo,
  } = props;
  return (
    <Div onClick={() => toggleTodo(id)}>
      <div>
        <h3>{todo}</h3>
        <p>
            Completed:
          {completed.toString()}
        </p>
      </div>
      <span
        onClick={() => deleteTodo(id)}
        role="button"
        tabIndex={0}
      >
            X
      </span>
    </Div>
  );
};

export default Todos;

Todos.propTypes = {
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
