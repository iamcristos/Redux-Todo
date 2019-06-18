import * as actions from './actions';

export const addTodo = todo => ({
  type: actions.ADDTODO,
  todo,
});

export const deleteTodo = id => ({
  type: actions.DELETETODO,
  id,
});

export const initTodo = () => ({
  type: actions.INIT_TODO,
});

export const toggleTodo = id => ({
  type: actions.TOGGLE_TODO,
  id,
});
