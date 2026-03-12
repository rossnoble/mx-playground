import { useState } from 'react'
import { TanStackFormExample } from './TanStackFormExample'
import { ReactHookFormExample } from './ReactHookFormExample'
import { FormikExample } from './FormikExample'
import { CodePlayground } from './CodePlayground'
import {
  tanstackFormCode,
  tanstackFormDependencies,
  reactHookFormCode,
  reactHookFormDependencies,
  formikCode,
  formikDependencies,
} from './code-snippets'

type Tab = 'comparison' | 'demo'
type FormLibrary = 'all' | 'tanstack' | 'react-hook-form' | 'formik'

export function FormComparison() {
  const [activeTab, setActiveTab] = useState<Tab>('comparison')
  const [activeView, setActiveView] = useState<FormLibrary>('all')

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Form Library Comparison</h1>
          <p className="text-gray-600 mt-2">
            Comparing TanStack Form, React Hook Form, and Formik
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-4">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'comparison'
                    ? 'border-gray-800 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Comparison
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'demo'
                    ? 'border-gray-800 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Demo
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'comparison' && (
          <>
            {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Comparison</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3">Feature</th>
                <th className="text-center py-2 px-3 text-blue-600">TanStack Form</th>
                <th className="text-center py-2 px-3 text-green-600">React Hook Form</th>
                <th className="text-center py-2 px-3 text-purple-600">Formik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">Bundle Size (gzip)</td>
                <td className="text-center py-2 px-3">~5kb</td>
                <td className="text-center py-2 px-3">~9kb</td>
                <td className="text-center py-2 px-3">~13kb</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">TypeScript</td>
                <td className="text-center py-2 px-3">First-class</td>
                <td className="text-center py-2 px-3">Excellent</td>
                <td className="text-center py-2 px-3">Good</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">Re-renders</td>
                <td className="text-center py-2 px-3">Granular subscriptions</td>
                <td className="text-center py-2 px-3">Minimal (uncontrolled)</td>
                <td className="text-center py-2 px-3">More frequent</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">Learning Curve</td>
                <td className="text-center py-2 px-3">Moderate</td>
                <td className="text-center py-2 px-3">Easy</td>
                <td className="text-center py-2 px-3">Easy</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">Framework Support</td>
                <td className="text-center py-2 px-3">Multi-framework</td>
                <td className="text-center py-2 px-3">React only</td>
                <td className="text-center py-2 px-3">React only</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">Schema Validation</td>
                <td className="text-center py-2 px-3">Via adapters</td>
                <td className="text-center py-2 px-3">Via resolvers</td>
                <td className="text-center py-2 px-3">Yup built-in</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3 font-medium">Async Validation</td>
                <td className="text-center py-2 px-3">Built-in</td>
                <td className="text-center py-2 px-3">Supported</td>
                <td className="text-center py-2 px-3">Supported</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">DevTools</td>
                <td className="text-center py-2 px-3">TanStack DevTools</td>
                <td className="text-center py-2 px-3">Official DevTools</td>
                <td className="text-center py-2 px-3">Community</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recommendation Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recommendation</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800">TanStack Form</h3>
              <p className="text-sm text-gray-700 mt-1">
                Type-safe, performant, framework-agnostic form library
              </p>
              
              <h4 className="font-medium text-gray-800 mt-4">Key Features:</h4>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>First-class TypeScript support</li>
                <li>Framework agnostic (React, Vue, Solid, Angular)</li>
                <li>Granular reactivity with subscriptions</li>
                <li>Built-in async validation support</li>
                <li>~5kb gzipped</li>
              </ul>

              <h4 className="font-medium text-gray-800 mt-4">Choose if:</h4>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>You need the smallest bundle size</li>
                <li>You want first-class TypeScript support</li>
                <li>You may need to use other frameworks (Vue, Solid, Angular)</li>
                <li>You want granular control over re-renders via subscriptions</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <h3 className="text-lg font-semibold text-gray-800">React Hook Form</h3>
              <p className="text-sm text-gray-700 mt-1">
                Performant, flexible and extensible forms with easy-to-use validation
              </p>

              <h4 className="font-medium text-gray-800 mt-4">Key Features:</h4>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Uncontrolled inputs with ref-based registration</li>
                <li>Built-in HTML validation alignment</li>
                <li>Minimal re-renders (best performance)</li>
                <li>Easy integration with UI libraries</li>
                <li>~9kb gzipped</li>
              </ul>

              <h4 className="font-medium text-gray-800 mt-4">Choose if:</h4>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Performance is your top priority</li>
                <li>You prefer working with uncontrolled components</li>
                <li>You want minimal re-renders out of the box</li>
                <li>You need excellent documentation and community support</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800">Formik</h3>
              <p className="text-sm text-gray-700 mt-1">
                Build forms in React, without the tears
              </p>

              <h4 className="font-medium text-gray-800 mt-4">Key Features:</h4>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Declarative render props pattern</li>
                <li>Built-in Field and ErrorMessage components</li>
                <li>Works great with Yup schema validation</li>
                <li>Battle-tested in production (Airbnb, Stripe, etc.)</li>
                <li>~13kb gzipped</li>
              </ul>

              <h4 className="font-medium text-gray-800 mt-4">Choose if:</h4>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>You prefer a more declarative/verbose API</li>
                <li>Your team is already familiar with it</li>
                <li>You want battle-tested production reliability</li>
                <li>You're working with Yup and want seamless integration</li>
              </ul>
            </div>
          </div>
        </div>
          </>
        )}

        {activeTab === 'demo' && (
          <>
            {/* View Toggle */}
            <div className="flex justify-center mb-8 flex-wrap gap-2">
              <button
                onClick={() => setActiveView('all')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeView === 'all'
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Show All
              </button>
              <button
                onClick={() => setActiveView('tanstack')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeView === 'tanstack'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                TanStack Form
              </button>
              <button
                onClick={() => setActiveView('react-hook-form')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeView === 'react-hook-form'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                React Hook Form
              </button>
              <button
                onClick={() => setActiveView('formik')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeView === 'formik'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Formik
              </button>
            </div>

            {/* Form Examples */}
            {activeView === 'all' ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TanStackFormExample />
                <ReactHookFormExample />
                <FormikExample />
              </div>
            ) : (
              <div className="max-w-6xl mx-auto">
                {activeView === 'tanstack' && (
                  <CodePlayground
                    code={tanstackFormCode}
                    dependencies={tanstackFormDependencies}
                    title="TanStack Form - Interactive Editor"
                    accentColor="#2563eb"
                  />
                )}
                {activeView === 'react-hook-form' && (
                  <CodePlayground
                    code={reactHookFormCode}
                    dependencies={reactHookFormDependencies}
                    title="React Hook Form - Interactive Editor"
                    accentColor="#16a34a"
                  />
                )}
                {activeView === 'formik' && (
                  <CodePlayground
                    code={formikCode}
                    dependencies={formikDependencies}
                    title="Formik - Interactive Editor"
                    accentColor="#9333ea"
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
