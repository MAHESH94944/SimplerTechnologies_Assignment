import React, { useState, useCallback, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleSetCurrentPage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "signup":
        return <Signup />;
      default:
        return <Home />;
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setCurrentPage={handleSetCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center py-10 text-lg text-gray-500">Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
