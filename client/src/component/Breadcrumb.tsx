import React from "react";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { ChevronRight, Home } from "lucide-react";
=======
>>>>>>> f0ba3c7 (Breadcrumb)

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

<<<<<<< HEAD
  const formatLabel = (text: string) => {
    return text
      .replace(/-/g, " ") 
      .replace(/\band\b/gi, "&") 
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav
      className="max-w-7xl mx-auto w-full px-4 py-3 md:px-6 lg:px-20 text-sm text-gray-600 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap">
        {/* Home */}
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:text-yellow-600 font-medium"
          >
<<<<<<< HEAD
=======
            <Home className="w-4 h-4 mr-1" />
>>>>>>> 95d1a6d (update breadcrumb -  policy - terms)
            Home
          </Link>
        </li>

        {/* Dynamic route segments */}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = formatLabel(name);

          return (
            <li key={routeTo} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-yellow-700 font-semibold">{label}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-yellow-600 font-medium"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
=======
  return (
<nav
  className="max-w-7xl mx-auto w-full px-4 py-4 md:px-6 lg:px-20 text-sm text-gray-600 border-b border-gray-200 pb-3"
  aria-label="Breadcrumb"
>
  <ol className="flex items-center space-x-2">
    <li>
      <Link to="/" className="hover:text-yellow-600 font-medium">
        Home
      </Link>
    </li>
    {pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      const label = name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <li key={routeTo} className="flex items-center">
          <span className="ml-0 mr-2 text-gray-400">/</span>
          {isLast ? (
            <span className="text-yellow-700 font-semibold">{label}</span>
          ) : (
            <Link to={routeTo} className="hover:text-yellow-600 font-medium">
              {label}
            </Link>
          )}
        </li>
      );
    })}
  </ol>
</nav>

  );  
>>>>>>> f0ba3c7 (Breadcrumb)
};

export default Breadcrumb;
