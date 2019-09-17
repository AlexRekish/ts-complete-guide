import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, Todo, deleteTodo } from '../store/actions';
import { StoreState } from '../store/reducers';

export interface AppProps {
  todos: Todo[];
  isLoading: boolean;

  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class App extends Component<AppProps> {
  onFetchTodos = (): void => {
    const { fetchTodos } = this.props;
    fetchTodos();
  };

  onTodoClick = (id: number): void => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  renderTodosList(): JSX.Element[] {
    const { todos } = this.props;

    return todos.map(
      (todo: Todo): JSX.Element => (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          <div>{todo.title}</div>
          <br />
        </div>
      )
    );
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <button type="button" onClick={this.onFetchTodos}>
          Fetch
        </button>
        {isLoading ? 'LOADING...' : this.renderTodosList()}
      </div>
    );
  }
}

const mapStateToProps = (store: StoreState) => ({
  todos: store.todos.todos,
  isLoading: store.todos.isLoading,
});

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App);
