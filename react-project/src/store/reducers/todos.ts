import { Todo, FetchTodos, DeleteTodo, Action } from '../actions';

export interface Todos {
  todos: Todo[] | [];
  isLoading: boolean;
}

const initialState: Todos = {
  todos: [],
  isLoading: false,
};

export function todosReducer(state: Todos = initialState, action: Action) {
  switch (action.type) {
    case FetchTodos.FETCH_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case FetchTodos.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case DeleteTodo.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
