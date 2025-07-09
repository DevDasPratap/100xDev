import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from "tsoa";
import { Todo } from "../todos/todo";
import { TodoCreationParams, TodoService } from "./todoService";

@Route('todo')
export class TodoController extends Controller {
    @Get("{todoId}")
    public async getTodo(@Path() todoId: string) {
        const todoService = new TodoService();
        return todoService.get(todoId);
    }
}