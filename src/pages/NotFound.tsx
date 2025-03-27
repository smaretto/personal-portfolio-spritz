
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9E3]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#1B1A1A]">404</h1>
        <p className="text-xl text-[#1B1A1A] mb-4">Oops! Page not found</p>
        <a href="/" className="text-[#FFAA85] hover:text-[#FFAA85]/80 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
