import React from "react";


interface TodoListItemProps {
  todo           :Todo;
  toggleComplete :ToggleComplete;
  EditTodo       :EditTodo,
  deleteTodo     :DeleteTodo,
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, EditTodo, deleteTodo}) => {

  return (
    
   <>
      <td>
        <label className={todo.complete? "todo-row completed" : "todo-row"}>
          <input type="checkbox" onChange={() => toggleComplete(todo)} checked={todo.complete} />
          {todo.text}
        </label>
      </td>
      <td>{todo.description}</td>
      <td>{todo.assigned}</td>
      <td>{todo.priority}</td>
      <td>
        <button className="btn btn-warning" onClick={() => EditTodo(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
          </svg>
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>
        </button>
      </td>
    </>
   
  )
}
