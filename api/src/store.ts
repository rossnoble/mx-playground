import { v4 as uuidv4 } from 'uuid';
import { Todo, CreateTodoInput, UpdateTodoInput } from './types.js';

// In-memory store
let todos: Todo[] = [
  {
    id: uuidv4(),
    title: 'Learn GraphQL',
    description: 'Understand queries, mutations, and subscriptions',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Build a Todo App',
    description: 'Create a full-stack application with React and Express',
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export const store = {
  // Get all todos
  getAllTodos(): Todo[] {
    return [...todos].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // Get a single todo by ID
  getTodoById(id: string): Todo | undefined {
    return todos.find((todo) => todo.id === id);
  },

  // Create a new todo
  createTodo(input: CreateTodoInput): Todo {
    const newTodo: Todo = {
      id: uuidv4(),
      title: input.title,
      description: input.description ?? null,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    return newTodo;
  },

  // Update an existing todo
  updateTodo(id: string, input: UpdateTodoInput): Todo | null {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return null;
    }

    const existingTodo = todos[index];
    const updatedTodo: Todo = {
      ...existingTodo,
      title: input.title ?? existingTodo.title,
      description: input.description !== undefined ? input.description : existingTodo.description,
      completed: input.completed ?? existingTodo.completed,
    };

    todos[index] = updatedTodo;
    return updatedTodo;
  },

  // Delete a todo
  deleteTodo(id: string): boolean {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return false;
    }
    todos.splice(index, 1);
    return true;
  },
};
