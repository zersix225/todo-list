import { prisma } from "../index.ts";

const GetTodo = async () => {
  const todos = await prisma.todo.findMany()
  return todos
};

const AddTodo = async (newTodoName: string) => {
  const newTodo = await prisma.todo.create({
    data: {
      name: newTodoName,
      success: false,
    },
  });
  return newTodo;
};

const EditTodo = async (todoId: number, editTodoName: string) => {
  const updatedTodo = await prisma.todo.update({
    where: { id: todoId },
    data: { name: editTodoName },
  });
  return updatedTodo;
};

const SuccessTodo = async (todoId: number, success: boolean) => {
  const newSuccess = (!success)? false : true
  const completedTodo = await prisma.todo.update({
    where: { id: todoId },
    data: { success: newSuccess },
  });
  return completedTodo;
};

const DeleteTodo = async (todoId: number) => {
  const deletedTodo = await prisma.todo.delete({
    where: { id: todoId },
  });
  return deletedTodo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };