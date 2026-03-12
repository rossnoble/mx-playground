import { useQuery } from '@apollo/client/react';
import { GET_TODOS } from '../graphql/operations';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

export function TodoList() {
  const { data, loading, error } = useQuery<{ todos: Todo[] }>(GET_TODOS);

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading todos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading todos: {error.message}
      </div>
    );
  }

  const todos = data?.todos || [];

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
