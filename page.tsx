export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-blue-600 shadow-lg p-5 rounded-lg bg-white mb-4">
        HELLO WORLD
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-md mb-4">
        Welcome to our website! We provide various services to help you achieve your goals. Explore our offerings and get in touch for any queries.
      </p>
      <a 
        href="/services" 
        className="mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        View Services
      </a>
    </div>
  );
}
