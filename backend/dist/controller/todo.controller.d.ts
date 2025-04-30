import type { Context } from "hono";
declare const GetTodo: (c: Context) => Promise<(Response & import("hono").TypedResponse<{
    success: true;
    data: {
        id: number;
        name: string;
        success: boolean;
    }[];
    msg: string;
}, import("hono/utils/http-status").ContentfulStatusCode, "json">) | (Response & import("hono").TypedResponse<{
    success: false;
    data: null;
    msg: string;
}, 500, "json">)>;
declare const AddTodo: (c: Context) => Promise<(Response & import("hono").TypedResponse<{
    success: true;
    data: {
        id: number;
        name: string;
        success: boolean;
    };
    msg: string;
}, import("hono/utils/http-status").ContentfulStatusCode, "json">) | (Response & import("hono").TypedResponse<{
    success: false;
    data: null;
    msg: string;
}, 500, "json">)>;
declare const EditTodoName: (c: Context) => Promise<(Response & import("hono").TypedResponse<{
    success: true;
    data: {
        id: number;
        name: string;
        success: boolean;
    };
    msg: string;
}, import("hono/utils/http-status").ContentfulStatusCode, "json">) | (Response & import("hono").TypedResponse<{
    success: false;
    data: null;
    msg: string;
}, 500, "json">)>;
declare const CompleteTodo: (c: Context) => Promise<(Response & import("hono").TypedResponse<{
    success: true;
    data: {
        id: number;
        name: string;
        success: boolean;
    };
    msg: string;
}, import("hono/utils/http-status").ContentfulStatusCode, "json">) | (Response & import("hono").TypedResponse<{
    success: false;
    data: null;
    msg: string;
}, 500, "json">)>;
declare const DeleteTodo: (c: Context) => Promise<(Response & import("hono").TypedResponse<{
    success: true;
    data: {
        id: number;
        name: string;
        success: boolean;
    };
    msg: string;
}, import("hono/utils/http-status").ContentfulStatusCode, "json">) | (Response & import("hono").TypedResponse<{
    success: false;
    data: null;
    msg: string;
}, 500, "json">)>;
export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
