import { useEffect, useState } from "react";
import TodoList from "../todo/todo";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { DialogCloseButton } from "@/components/pop";

const Home = () => {
  const [data, setData] = useState([]);

  const [input, setInput] = useState({
    name: "",
    success: false,
  });

  const [error, setError] = useState("");
  const URL = "http://localhost:8000";

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${URL}/todos`);
      const newData = response.data.data;
      setData(newData);
    } catch (error) {
      console.log("error");
    }
  };

  const createTodo = async () => {
    try {
      const response = await axios.post(`${URL}/todos`, input);
      fetchTodos();
      setInput({
        name: "",
        success: false,
      });
      console.log("Todo created:", response.data);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${URL}/todos/${id}`);
      console.log("Todo deleted:", response.data);
      setData(data.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error delete todo:", error);
    }
  };

  const editTodo = async (updateTodo) => {
    try {
      await axios.put(`${URL}/todos/edit/${updateTodo.id}`, updateTodo);
      console.log("Todo update:", updateTodo);
      fetchTodos();
    } catch (error) {
      console.error("Error update todo:", error);
    }
  };

  const successTodos = async (successTodo) => {
    try {
      const resposne = await axios.put(
        `${URL}/todos/complete/${successTodo.id}`,
        { success: successTodo.success }
      );
      console.log("Todo complete:", resposne.data.success);
      fetchTodos();
    } catch (error) {
      console.error("Error complete todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center mx-10 md:mx-0">
      <div className="w-2xl">
        <h1 className="text-center font-bold text-3xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900">Welcome to TODO List</h1>
        <div>
          <div className="flex space-x-2 mb-2">
            <Input
              name="name"
              type="text"
              placeholder="Type somthing..."
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              value={input.name}
            />
            <Button
              onClick={() => {
                if (input.name !== "") {
                  createTodo();
                  setError("");
                } else {
                  setError("Please write something");
                }
              }}
            >
              Add
            </Button>
          </div>

          {error && <p className="text-red-500 text-sm my-2">{error}</p>}

          {data.map((item) => (
            <div key={item.id} className="mb-2">
              <TodoList
                title={item.name}
                isSuccess={successTodos}
                id={item.id}
                initialSuccess={item.success}
              >
                {console.log(item.success)}
                <DialogCloseButton onSave={editTodo} id={item.id} />

                <Button
                  className="bg-red-500"
                  onClick={() => deleteTodo(item.id)}
                >
                  Delete
                </Button>
              </TodoList>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
