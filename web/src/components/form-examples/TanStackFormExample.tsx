import { useForm } from '@tanstack/react-form'

export function TanStackFormExample() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: 18,
      newsletter: false,
    },
    onSubmit: async ({ value }) => {
      // Simulate API call
      console.log('TanStack Form submitted:', value)
      alert(`Form submitted!\n${JSON.stringify(value, null, 2)}`)
    },
  })

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">TanStack Form</h2>
      <p className="text-sm text-gray-500 mb-4">
        Type-safe, performant, framework-agnostic form library
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-4"
      >
        {/* First Name Field */}
        <form.Field
          name="firstName"
          validators={{
            onSubmit: ({ value }) => {
              if (!value) return 'First name is required'
              if (value.length < 2) return 'First name must be at least 2 characters'
              return undefined
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={`tanstack-${field.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                id={`tanstack-${field.name}`}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter first name"
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* Last Name Field */}
        <form.Field
          name="lastName"
          validators={{
            onSubmit: ({ value }) => {
              if (!value) return 'Last name is required'
              if (value.length < 2) return 'Last name must be at least 2 characters'
              return undefined
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={`tanstack-${field.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                id={`tanstack-${field.name}`}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter last name"
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* Email Field */}
        <form.Field
          name="email"
          validators={{
            onSubmit: ({ value }) => {
              if (!value) return 'Email is required'
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Invalid email address'
              }
              return undefined
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={`tanstack-${field.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id={`tanstack-${field.name}`}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* Age Field */}
        <form.Field
          name="age"
          validators={{
            onSubmit: ({ value }) => {
              if (value < 18) return 'Must be at least 18 years old'
              if (value > 120) return 'Please enter a valid age'
              return undefined
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={`tanstack-${field.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                id={`tanstack-${field.name}`}
                name={field.name}
                type="number"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* Newsletter Checkbox */}
        <form.Field name="newsletter">
          {(field) => (
            <div className="flex items-center">
              <input
                id={`tanstack-${field.name}`}
                name={field.name}
                type="checkbox"
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`tanstack-${field.name}`} className="ml-2 block text-sm text-gray-700">
                Subscribe to newsletter
              </label>
            </div>
          )}
        </form.Field>

        {/* Submit Button */}
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside mt-1 text-gray-600">
          <li>First-class TypeScript support</li>
          <li>Framework agnostic (React, Vue, Solid, Angular)</li>
          <li>Granular reactivity with subscriptions</li>
          <li>Built-in async validation support</li>
          <li>~5kb gzipped</li>
        </ul>
      </div>
    </div>
  )
}
