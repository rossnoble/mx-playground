import { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { CREATE_TODO, GET_TODOS } from '../graphql/operations';

export function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createTodo, { loading }] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
    onCompleted: () => {
      setTitle('');
      setDescription('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    createTodo({
      variables: {
        input: {
          title: title.trim(),
          description: description.trim() || null,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <div>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
      </div>
      <button
        type="submit"
        disabled={loading || !title.trim()}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
