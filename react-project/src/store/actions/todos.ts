import { FetchTodosAction, DeleteTodoAction } from './index';
import axios from 'axios';
import { Dispatch } from 'redux';

export enum FetchTodos {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
}

export enum DeleteTodo {
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface StartFetchTodosAction {
  type: FetchTodos.FETCH_TODOS;
}

export interface FetchTodosAction {
  type: FetchTodos.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: DeleteTodo;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const startFetchTodos = (): StartFetchTodosAction => ({
  type: FetchTodos.FETCH_TODOS,
});

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<StartFetchTodosAction>(startFetchTodos());

      const res = await axios.get<Todo[]>(url);
      dispatch<FetchTodosAction>({ type: FetchTodos.FETCH_TODOS_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DeleteTodo.DELETE_TODO_SUCCESS,
  payload: id,
});
