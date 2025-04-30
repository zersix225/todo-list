declare const GetTodo: () => Promise<{
    id: number;
    name: string;
    success: boolean;
}[]>;
declare const AddTodo: (newTodoName: string) => Promise<{
    id: number;
    name: string;
    success: boolean;
}>;
declare const EditTodo: (todoId: number, editTodoName: string) => Promise<{
    id: number;
    name: string;
    success: boolean;
}>;
declare const SuccessTodo: (todoId: number, success: boolean) => Promise<{
    id: number;
    name: string;
    success: boolean;
}>;
declare const DeleteTodo: (todoId: number) => Promise<{
    id: number;
    name: string;
    success: boolean;
}>;
export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
