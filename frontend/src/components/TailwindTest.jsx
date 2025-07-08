export default function TailwindTest() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Typography Plugin Demo */}
      <article className="prose lg:prose-xl mb-8">
        <h1>Welcome to Tailwind CSS</h1>
        <p className="lead">
          This is a demonstration of Tailwind CSS with typography and forms plugins.
        </p>
        <h2>Features Showcase</h2>
        <ul>
          <li>Typography Plugin</li>
          <li>Forms Plugin</li>
          <li>Custom Font (Poppins)</li>
        </ul>
      </article>

      {/* Forms Plugin Demo */}
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  )
} 