import uuid from 'uuid';
import * as actions from '../action/actions';

const initialState = {
  todo: [],
};
let todo;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADDTODO:
      todo = { id: uuid(), completed: false, value: action.todo };
      return {
        ...state,
        todo: state.todo.concat(todo),
      };
    case actions.TOGGLE_TODO:
      todo = state.todo.map((todos) => {
        if (todos.id === action.id) {
          return {
            ...todos,
            completed: !todos.completed,
          };
        }
        return todo;
      });
      return { ...state, todo };
    case actions.DELETETODO:
      todo = state.todo.filter(todos => todos.id !== action.id);
      return { ...state, todo };
    default:
      return state;
  }
};

export default reducer;
