import { store } from './store.js';
import { CreateTodoInput, UpdateTodoInput } from './types.js';

export const resolvers = {
  Query: {
    todos: () => {
      return store.getAllTodos();
    },
    todo: (_: unknown, { id }: { id: string }) => {
      return store.getTodoById(id);
    },
  },

  Mutation: {
    createTodo: (_: unknown, { input }: { input: CreateTodoInput }) => {
      return store.createTodo(input);
    },
    updateTodo: (_: unknown, { id, input }: { id: string; input: UpdateTodoInput }) => {
      return store.updateTodo(id, input);
    },
    deleteTodo: (_: unknown, { id }: { id: string }) => {
      return store.deleteTodo(id);
    },
  },
};
