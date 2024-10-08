import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {
    const [todos, setTodos] = useState([]);

    // Function to fetch todos from the server
    const fetchTodos = async () => {
        try {
            const res = await fetch("http://localhost:3000/todos");
            if (!res.ok) {
                throw new Error("Failed to fetch todos");
            }
            const resData = await res.json();
            setTodos(resData.todos);
        } catch (err) {
            console.error("Error fetching todos:", err);
        }
    };

    // Fetch todos on component mount
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <div>
                {/* Pass the function to update todos when a new todo is added */}
                <CreateTodo onTodoAdded={fetchTodos} />
                <Todo todos={todos} />
            </div>
        </>
    );
}

export default App;
