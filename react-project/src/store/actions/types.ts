import { FetchTodosAction, DeleteTodoAction, StartFetchTodosAction } from './todos';

export type Action = FetchTodosAction | DeleteTodoAction | StartFetchTodosAction;
