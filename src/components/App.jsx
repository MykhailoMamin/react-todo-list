import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import TodoList from './TodoList/TodoList';
import css from './TodoList/TodoList.module.css';

class App extends Component {
  state = {
    todo: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
    ],
  };

  deleteTodos = todoId => {
    this.setState(prevState => ({
      todo: prevState.todo.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todo } = this.state;

    const totalTodoCount = todo.length;
    const completedTodo = todo.filter(todo => todo.completed).length;

    return (
      <>
        {/* <Counter /> */}
        {/* <Dropdown /> */}

        <div className={css.TodoCount}>
          <p>Загальна кількість ToDo: {totalTodoCount}</p>
          <br />
          <p>Загальна кількість виконаних ToDo: {completedTodo}</p>
        </div>

        <TodoList todos={this.state.todo} onDeleteTodo={this.deleteTodos} />
      </>
    );
  }
}

export default App;
