import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetTodo = async (c: Context) => {
  try {
    const todos = await todoModel.GetTodo()
    return c.json({
      success: true,
      data: todos,
      msg: "Fetched todos successfully",
    });

  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const { name } = await c.req.json(); 
    const newTodo = await todoModel.AddTodo(name);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Added new todo successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const newId = parseInt(c.req.param('id'))
    const { name } = await c.req.json();
    const updatedTodo = await todoModel.EditTodo(newId, name);
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Edited todo name successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const newId = parseInt(c.req.param('id'))
    const { success } = await c.req.json()
    const completedTodo = await todoModel.SuccessTodo(newId, success);
    return c.json({
      success: true,
      data: completedTodo,
      msg: "Completed todo successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const newId = parseInt(c.req.param('id'))
    const deletedTodo = await todoModel.DeleteTodo(newId);
    return c.json({
      success: true,
      data: deletedTodo,
      msg: "Deleted todo successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
