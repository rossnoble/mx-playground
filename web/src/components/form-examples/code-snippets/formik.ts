export const formikCode = `import { Formik, Form, Field, ErrorMessage } from 'formik'

interface FormData {
  firstName: string
  email: string
}

const validate = (values: FormData) => {
  const errors: Partial<FormData> = {}
  
  if (!values.firstName) {
    errors.firstName = 'First name is required'
  }
  
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[^@]+@[^@]+\\.[^@]+$/.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  return errors
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h2>Formik</h2>
      <Formik<FormData>
        initialValues={{ firstName: '', email: '' }}
        validate={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                First Name
              </label>
              <Field
                name="firstName"
                style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
              />
              <ErrorMessage
                name="firstName"
                component="p"
                style={{ color: 'red', margin: '4px 0' }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Email
              </label>
              <Field
                name="email"
                type="email"
                style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: 'red', margin: '4px 0' }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '10px 20px',
                background: '#9333ea',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
`

export const formikDependencies = {
  'formik': 'latest',
}
