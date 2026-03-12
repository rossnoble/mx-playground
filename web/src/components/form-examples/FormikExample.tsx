import { Formik, Form, Field, ErrorMessage } from 'formik'

interface FormData {
  firstName: string
  lastName: string
  email: string
  age: number
  newsletter: boolean
}

// Validation function
const validate = (values: FormData) => {
  const errors: Partial<Record<keyof FormData, string>> = {}

  if (!values.firstName) {
    errors.firstName = 'First name is required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters'
  }

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.age) {
    errors.age = 'Age is required'
  } else if (values.age < 18) {
    errors.age = 'Must be at least 18 years old'
  } else if (values.age > 120) {
    errors.age = 'Please enter a valid age'
  }

  return errors
}

export function FormikExample() {
  const initialValues: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    age: 18,
    newsletter: false,
  }

  const handleSubmit = async (values: FormData) => {
    // Simulate API call
    console.log('Formik submitted:', values)
    alert(`Form submitted!\n${JSON.stringify(values, null, 2)}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Formik</h2>
      <p className="text-sm text-gray-500 mb-4">
        Build forms in React, without the tears
      </p>

      <Formik
        initialValues={initialValues}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            {/* First Name Field */}
            <div>
              <label htmlFor="formik-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <Field
                id="formik-firstName"
                name="firstName"
                type="text"
                placeholder="Enter first name"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.firstName && touched.firstName
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label htmlFor="formik-lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Field
                id="formik-lastName"
                name="lastName"
                type="text"
                placeholder="Enter last name"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.lastName && touched.lastName
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="formik-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Field
                id="formik-email"
                name="email"
                type="email"
                placeholder="Enter email"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email && touched.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Age Field */}
            <div>
              <label htmlFor="formik-age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <Field
                id="formik-age"
                name="age"
                type="number"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.age && touched.age ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <ErrorMessage
                name="age"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-center">
              <Field
                id="formik-newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="formik-newsletter" className="ml-2 block text-sm text-gray-700">
                Subscribe to newsletter
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside mt-1 text-gray-600">
          <li>Declarative render props pattern</li>
          <li>Built-in Field and ErrorMessage components</li>
          <li>Works great with Yup schema validation</li>
          <li>Battle-tested in production (Airbnb, Stripe, etc.)</li>
          <li>~13kb gzipped</li>
        </ul>
      </div>
    </div>
  )
}
