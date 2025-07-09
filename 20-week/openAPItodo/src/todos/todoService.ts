import { Todo } from "../todos/todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: string): Todo {
    // Simulate fetch from database
    return {
      id: todoId,
      title: "Sample Title",
      description: "Sample Description",
      done: false,
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    console.log("Mock DB call to create a new todo");

    return {
      id: Date.now().toString(), // simple unique ID using timestamp
      title: todoCreationParams.title,
      description: todoCreationParams.description,
      done: false,
    };
  }
}
