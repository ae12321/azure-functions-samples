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

export const getTodo = (id: number) => {
  return todoData.find((todo) => todo.id === id);
};
export const getTodos = () => {
  return todoData;
};
export const pushTodos = (title: string, description: string) => {
  const ids = todoData.map((todo) => todo.id);
  const nextId = Math.max(...ids) + 1;
  const newData: Todo = {
    id: nextId,
    title,
    description,
    created_at: new Date().toISOString().split("T")[0],
  };
  todoData.push(newData);
};
export const putTodo = (id: number, title: string, description: string) => {
  const data = getTodo(id);
  data.title = title;
  data.description = description;
  data.created_at = new Date().toISOString().split("T")[0];
};
export const deleteTodo = (id: number) => {
  const index = todoData.findIndex((todo) => todo.id === id);
  todoData.splice(index, 1);
};
