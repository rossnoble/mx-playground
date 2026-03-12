import { Link } from 'wouter'

export function Home() {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Playground</h1>
          <p className="text-gray-600 mt-2">Explore different examples and demos</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/form-examples"
            className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Form Examples</h2>
            <p className="text-gray-600">
              Compare different form libraries: React Hook Form, Formik, and TanStack Form
            </p>
          </Link>

          <Link
            href="/todo-list"
            className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Todo List</h2>
            <p className="text-gray-600">
              A simple GraphQL-powered todo list application
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
