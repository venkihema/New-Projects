import { useState } from "react";
export const Todo = ({
  data = {},
  deleteTodo = () => {},
  editTodo = () => {},
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editInput, setEditInput] = useState("");

  const onEditHandler = () => {
    setIsEditable(true);
    setEditInput(data.todo);
  };

  const updateHandler = () => {
    editTodo({
      ...data,
      todo: editInput,
    });
    setIsEditable(false);
  };

  return (
    <div>
      {isEditable ? (
        <div className="editDiv">
          <div className="updateInput">
            <input
              type={"text"}
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          </div>
          <div className="updateBtn">
            <button onClick={updateHandler}>Update</button>
          </div>
        </div>
      ) : (
        <div className="createdTodos">
          <h4>{data.todo}</h4>
          <div className="eachTodoButton">
            <button onClick={() => deleteTodo(data.id)}>Delete</button>
            <button onClick={onEditHandler}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};
