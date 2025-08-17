import React from "react";

// NotFound page for unknown routes
const NotFound = () => (
  <main
    className="flex flex-col items-center justify-center min-h-[40vh] text-center"
    aria-label="404 Not Found"
  >
    <h1 className="text-4xl font-bold text-indigo-700 mb-4">404</h1>
    <p className="text-lg text-gray-700 mb-2">
      Sorry, the page you are looking for does not exist.
    </p>
    <a
      href="/"
      className="text-indigo-600 hover:underline mt-2"
      aria-label="Go to Home"
    >
      Go to Home
    </a>
  </main>
);

export default NotFound;
