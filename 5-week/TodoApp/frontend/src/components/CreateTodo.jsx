import { useState } from "react";

export function CreateTodo({ onTodoAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                id="title"
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            /> <br />

            <input
                id="desc"
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            /> <br />

            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={() => {
                    // Make sure title and description are not empty
                    if (!title || !description) {
                        alert("Please fill out both fields");
                        return;
                    }

                    // Fetch API to add todo
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title,
                            description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        .then(async (res) => {
                            if (!res.ok) {
                                throw new Error("Failed to add todo");
                            }
                            const json = await res.json();
                            alert("Todo added");

                            // Trigger callback to update todo list in the parent component
                            onTodoAdded();
                        })
                        .catch((err) => {
                            alert("Error adding todo: " + err.message);
                        });
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
