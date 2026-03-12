import { useForm, type SubmitHandler } from 'react-hook-form'

interface FormData {
  firstName: string
  lastName: string
  email: string
  age: number
  newsletter: boolean
}

export function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onSubmit', // Validate only on form submission
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: 18,
      newsletter: false,
    },
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Simulate API call
    console.log('React Hook Form submitted:', data)
    alert(`Form submitted!\n${JSON.stringify(data, null, 2)}`)
  }

  // Watch newsletter value for demonstration
  const newsletterValue = watch('newsletter')

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name Field */}
        <div>
          <label htmlFor="rhf-firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            id="rhf-firstName"
            {...register('firstName', {
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'First name must be at least 2 characters',
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter first name"
            aria-invalid={errors.firstName ? 'true' : 'false'}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name Field */}
        <div>
          <label htmlFor="rhf-lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            id="rhf-lastName"
            {...register('lastName', {
              required: 'Last name is required',
              minLength: {
                value: 2,
                message: 'Last name must be at least 2 characters',
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter last name"
            aria-invalid={errors.lastName ? 'true' : 'false'}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="rhf-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="rhf-email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter email"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label htmlFor="rhf-age" className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            id="rhf-age"
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: {
                value: 18,
                message: 'Must be at least 18 years old',
              },
              max: {
                value: 120,
                message: 'Please enter a valid age',
              },
              valueAsNumber: true,
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-invalid={errors.age ? 'true' : 'false'}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-center">
          <input
            id="rhf-newsletter"
            type="checkbox"
            {...register('newsletter')}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="rhf-newsletter" className="ml-2 block text-sm text-gray-700">
            Subscribe to newsletter
          </label>
        </div>

        {/* Watch demonstration */}
        {newsletterValue && (
          <p className="text-sm text-green-600">Thanks for subscribing!</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
