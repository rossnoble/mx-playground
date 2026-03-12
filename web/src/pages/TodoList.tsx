import { AddTodo } from '../components/AddTodo'
import { TodoList as TodoListComponent } from '../components/TodoList'

export function TodoList() {
  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
          <p className="text-gray-600 mt-2">A simple GraphQL-powered todo list</p>
        </header>
        <main className="bg-white rounded-xl shadow-lg p-6">
          <AddTodo />
          <TodoListComponent />
        </main>
      </div>
    </div>
  )
}
