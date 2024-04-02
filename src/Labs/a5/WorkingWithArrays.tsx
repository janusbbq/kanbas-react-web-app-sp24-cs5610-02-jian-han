import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import "./index.css";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
  const API = `${API_BASE}/a5/todos`;
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: { id: any }) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo: { id: any }) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary wd-button-space" href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="lab-input lab-input-space lab-input-corners"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />
      <a className="btn btn-primary wd-button-space" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a
        className="btn btn-primary wd-button-space"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary wd-button-space" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <input
        className="lab-input lab-input-space lab-input-corners"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />
      <a
        className="btn btn-primary wd-button-space"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <h3>Updating an Item in an Array</h3>
      <input
        className="lab-input lab-input-space lab-input-corners"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />{" "}
      Id of Array to Update
      <br />
      <input
        type="text"
        className="lab-input lab-input-space lab-input-corners"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <a
        className="btn btn-primary wd-button-space"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>
      <br />
      <input
        type="checkbox"
        className="lab-input-space"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <a
        className="btn btn-primary wd-button-space"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed to {todo.completed.toString()}
      </a>
      <br />
      <input
        type="text"
        className="lab-input lab-input-space lab-input-corners"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <a
        className="btn btn-primary wd-button-space"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description to {todo.description}
      </a>
      <br />
      <button className="btn btn-primary wd-button-space" onClick={createTodo}>
        Create Todo
      </button>
      <button className="btn btn-primary wd-button-space" onClick={updateTitle}>
        Update Title
      </button>
      <br />
      <textarea
        value={todo.description}
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <input
        value={todo.due}
        type="date"
        className="lab-input lab-input-space lab-input-corners"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <label>
        <input
          checked={todo.completed}
          type="checkbox"
          className="lab-input-space"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: !todo.completed,
            })
          }
        />
        Completed
      </label>
      <button className="btn btn-primary wd-button-space" onClick={postTodo}>
        {" "}
        Post Todo{" "}
      </button>
      <button className="btn btn-primary wd-button-space" onClick={updateTodo}>
        Update Todo
      </button>
      <br />
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button
              className="btn lab-green-button wd-button-space"
              onClick={() => fetchTodoById(todo.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger wd-button-space"
              onClick={() => removeTodo(todo)}
            >
              Remove
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
