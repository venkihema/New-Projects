import { useEffect, useState } from "react";
import "./Todo.css";
export const TodoList = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const todoKey = "todos";
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const addData = (e) => {
    if (input.length !== 0) {
      const newTodos = [...data, { todo: input, id: Math.random() }];
      setData(newTodos);
      localStorage.setItem(todoKey, JSON.stringify(newTodos));
    }
    setInput("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(todoKey) || "[]");
    setData(data);
  }, []);

  const deleteTodo = (todoId) => {
    const filteredData = data.filter((item) => item.id !== todoId);
    setData(filteredData);
    localStorage.setItem(todoKey, JSON.stringify(filteredData));
  };

  const editTodo = (editId) => {
    // const editedData = data.filter((item) => item.id === editId);
    // setInput(editedData[0].todo);
    // const filter = data.map((item) => {
    //   if (item.id === editId) {
    //     item.todo = input;
    //   }
    //   return item;
    // });
    // setData(filter);
    // localStorage.setItem(todoKey, JSON.stringify(filter));
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
      <div>
        {data.length === 0 ? (
          <h4 style={{ color: "white", paddingLeft: "35px" }}>
            Add Your Todos Here
          </h4>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index} className="createdTodos">
                <div className="eachTodo">
                  <h4>{item.todo}</h4>
                </div>
                <div className="eachTodoButton">
                  <button onClick={() => deleteTodo(item.id)}>Delete</button>
                  <button onClick={() => editTodo(item.id)}>Edit</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
