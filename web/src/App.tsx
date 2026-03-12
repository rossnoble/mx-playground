import { Route, Switch, Link, useLocation } from 'wouter'
import { Home } from './pages/Home'
import { FormExamples } from './pages/FormExamples'
import { TodoList } from './pages/TodoList'

function Navigation() {
  const [location] = useLocation()

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md font-medium transition-colors ${
      location === path
        ? 'bg-gray-800 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex gap-4">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/form-examples" className={linkClass('/form-examples')}>
            Form Examples
          </Link>
          <Link href="/todo-list" className={linkClass('/todo-list')}>
            Todo List
          </Link>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/form-examples" component={FormExamples} />
        <Route path="/todo-list" component={TodoList} />
      </Switch>
    </div>
  )
}

export default App
