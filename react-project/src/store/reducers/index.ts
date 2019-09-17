import { combineReducers } from 'redux';
import { todosReducer, Todos } from './todos';

export interface StoreState {
  todos: Todos;
}

const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

export default reducers;
