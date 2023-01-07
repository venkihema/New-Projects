import { useEffect, useState } from "react";
import "./Todo.css";
import { Todo } from "./EachTodoComponent";
export const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const todoKey = "todos";
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const addData = (e) => {
    if (input.length !== 0) {
      const newTodos = [...todos, { todo: input, id: Math.random() }];
      setTodos(newTodos);
      localStorage.setItem(todoKey, JSON.stringify(newTodos));
    }
    setInput("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(todoKey) || "[]");
    setTodos(data);
  }, []);

  const deleteTodo = (todoId) => {
    const filteredData = todos.filter((item) => item.id !== todoId);
    setTodos(filteredData);
    localStorage.setItem(todoKey, JSON.stringify(filteredData));
  };

  const editTodo = (newTodo) => {
    console.log(newTodo);
    const id = newTodo.id;
    console.log(id);
    const updatedTodos = todos.map((item) => {
      if (item.id === newTodo.id) {
        return newTodo;
      } else {
        return item;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem(todoKey, JSON.stringify(updatedTodos));
  };

  return (
    <div className="outer">
      <div className="heading">
        <h1>Todo-List</h1>
      </div>
      <div className="inner">
        <div className="input-div">
          <input type={"text"} value={input} onChange={changeInput} />
        </div>

        <div className="button-div">
          <button onClick={addData}> Create</button>
        </div>
      </div>
      {todos.length === 0 ? (
        <h4 style={{ color: "white", paddingLeft: "35px" }}>
          Add Your Todos Here
        </h4>
      ) : (
        todos.map((item, index) => {
          return (
            <Todo
              key={index}
              data={item}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })
      )}
    </div>
  );
};
