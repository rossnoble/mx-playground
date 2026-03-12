import { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { UPDATE_TODO, DELETE_TODO, GET_TODOS } from '../graphql/operations';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  const handleToggleComplete = () => {
    updateTodo({
      variables: {
        id: todo.id,
        input: { completed: !todo.completed },
      },
    });
  };

  const handleDelete = () => {
    deleteTodo({ variables: { id: todo.id } });
  };

  const handleSaveEdit = () => {
    if (!editTitle.trim()) return;
    updateTodo({
      variables: {
        id: todo.id,
        input: {
          title: editTitle.trim(),
          description: editDescription.trim() || null,
        },
      },
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setIsEditing(false);
  };

  const formattedDate = new Date(todo.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (isEditing) {
    return (
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm space-y-2">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <input
          type="text"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Description (optional)"
          className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSaveEdit}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            Save
          </button>
          <button
            onClick={handleCancelEdit}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex items-start gap-3 ${todo.completed ? 'opacity-60' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
        className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
      />
      <div className="flex-1 min-w-0">
        <h3 className={`font-medium text-gray-900 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.title}
        </h3>
        {todo.description && (
          <p className={`text-sm text-gray-600 mt-1 ${todo.completed ? 'line-through' : ''}`}>
            {todo.description}
          </p>
        )}
        <p className="text-xs text-gray-400 mt-2">{formattedDate}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
