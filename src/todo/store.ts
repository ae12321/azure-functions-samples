import { query } from "../utils/db";

export type Todo = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

const todoData: Todo[] = [
  {
    id: 1,
    title: "buy milk",
    description: "goto shop",
    created_at: "2023-01-01",
  },
  {
    id: 2,
    title: "eat lunch",
    description: "-",
    created_at: "2023-01-05",
  },
  {
    id: 3,
    title: "study english",
    description: "buy book",
    created_at: "2023-01-10",
  },
];

export const getTodo = async (id: number) => {
  const res = await query("select * from todo where id = $1", [id]);
  const [todo] = res.rows;
  return todo as Todo;
};
export const getTodos = async () => {
  const res = await query("select * from todo", []);
  const todos = res.rows;
  return todos as Todo[];
};
export const pushTodos = async (title: string, description: string) => {
  await query("insert into todo(title, description) values($1, $2)", [
    title,
    description,
  ]);
};
export const putTodo = async (
  id: number,
  title: string,
  description: string
) => {
  const now = new Date();
  await query(
    "update todo set title = $1, description = $2, created_at = $3 where id = $4",
    [title, description, now, id]
  );
};
export const deleteTodo = async (id: number) => {
  await query("delete from todo where id = $1", [id]);
};
