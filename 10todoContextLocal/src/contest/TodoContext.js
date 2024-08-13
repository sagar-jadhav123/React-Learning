import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      msg: "Todo Msg",
      check: false,
    },
  ],
  addTodo: (msg) => {},
  updateTodo: (id, msg) => {},
  deleteTodo: (id) => {},
  toggle: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
