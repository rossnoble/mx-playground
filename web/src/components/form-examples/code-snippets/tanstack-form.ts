export const tanstackFormCode = `import { useForm } from '@tanstack/react-form'

export default function App() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      email: '',
    },
    onSubmit: async ({ value }) => {
      alert(JSON.stringify(value, null, 2))
    },
  })

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h2>TanStack Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="firstName"
          validators={{
            onSubmit: ({ value }) =>
              !value ? 'First name is required' : undefined,
          }}
        >
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                First Name
              </label>
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
              />
              {field.state.meta.errors.length > 0 && (
                <p style={{ color: 'red', margin: '4px 0' }}>
                  {field.state.meta.errors.join(', ')}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onSubmit: ({ value }) => {
              if (!value) return 'Email is required'
              if (!/^[^@]+@[^@]+\\.[^@]+$/.test(value))
                return 'Invalid email'
              return undefined
            },
          }}
        >
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Email
              </label>
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
              />
              {field.state.meta.errors.length > 0 && (
                <p style={{ color: 'red', margin: '4px 0' }}>
                  {field.state.meta.errors.join(', ')}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
`

export const tanstackFormDependencies = {
  '@tanstack/react-form': 'latest',
}
