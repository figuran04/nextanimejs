const NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="h1 mb-4">The React Framework for the Web</h1>
        <p className="text-lg md:text-2xl mb-8">
          Used by some of the world's largest companies, Next.js enables you to
          create high-quality web applications with the power of React
          components.
        </p>
        <div className="space-x-4">
          <a href="/get-started" className="px-8 py-2 rounded-md">
            Get Started
          </a>
          <a href="/learn" className="px-8 py-2 bg-gray-700 rounded-md">
            Learn Next.js
          </a>
        </div>
      </header>
      <footer className="mt-8 text-center">
        <code>npx create-next-app@latest</code>
      </footer>
    </div>
  )
}

export default NextPage
