import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";
import { capitalizeWords } from "../../utils/utils.ts";

interface BreadcrumbProps {
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = "/" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  useEffect(() => {
    console.log("Breadcrumb rendered");
  }, []);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link breadcrumb-base">
            Dashboard
          </Link>
          {pathnames.length > 0 && (
            <span className="breadcrumb-separator">{separator}</span>
          )}
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="breadcrumb-item">
              {!isLast ? (
                <Link to={routeTo} className="breadcrumb-link">
                  {capitalizeWords(decodeURIComponent(name))}
                </Link>
              ) : (
                <span aria-current="page">
                  {capitalizeWords(decodeURIComponent(name))}
                </span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
