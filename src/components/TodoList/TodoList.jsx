import React from 'react';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.TodoItem}>
          <p>{text}</p>
          <button
            type="button"
            onClick={() => onDeleteTodo(id)}
            className={css.TodoButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
