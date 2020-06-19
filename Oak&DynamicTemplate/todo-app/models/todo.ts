
type Todo = {id: number, todo: string};
export let todos: Array<Todo> = [];
export class Todos{
    static addTodo(todo: Todo) {
        todos.push(todo)
    }
    static removeTodo(id: number) {
            todos = todos.filter(todo=>todo.id !== id);
    }
    static UpdateTodo(id: number, todo: string) {
        const index = todos.findIndex(todo=>todo.id === id);
        todos[index].todo = todo;
    }
    static findTodoById(id: number) {
        todos.find(todo=> todo.id === id);
    }

    static getAllTodos(): Array<Todo> {
        return [...todos];
    }
}