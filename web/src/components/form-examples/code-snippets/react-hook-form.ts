export const reactHookFormCode = `import { useForm } from 'react-hook-form'

interface FormData {
  firstName: string
  email: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      email: '',
    },
  })

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>
            First Name
          </label>
          <input
            {...register('firstName', {
              required: 'First name is required',
            })}
            style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
          />
          {errors.firstName && (
            <p style={{ color: 'red', margin: '4px 0' }}>
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@]+@[^@]+\\.[^@]+$/,
                message: 'Invalid email address',
              },
            })}
            style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
          />
          {errors.email && (
            <p style={{ color: 'red', margin: '4px 0' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: '#16a34a',
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

export const reactHookFormDependencies = {
  'react-hook-form': 'latest',
}
