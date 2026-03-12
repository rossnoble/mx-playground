import { useState } from 'react'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { FormComparison } from './components/form-examples/FormComparison'

type View = 'todo' | 'forms'

function App() {
  const [view, setView] = useState<View>('forms')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-4">
            <button
              onClick={() => setView('todo')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                view === 'todo'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todo App
            </button>
            <button
              onClick={() => setView('forms')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                view === 'forms'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Form Comparison
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {view === 'todo' ? (
        <div className="py-8">
          <div className="max-w-2xl mx-auto px-4">
            <header className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
              <p className="text-gray-600 mt-2">A simple GraphQL-powered todo list</p>
            </header>
            <main className="bg-white rounded-xl shadow-lg p-6">
              <AddTodo />
              <TodoList />
            </main>
          </div>
        </div>
      ) : (
        <FormComparison />
      )}
    </div>
  )
}

export default App
