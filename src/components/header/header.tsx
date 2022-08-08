// import libs
import React from "react";

// props
interface HeaderProps {
  pageContext: {
    frontmatter: { [k: string]: string };
  };
}

// header component
const Header = ({ pageContext }: HeaderProps) => {
  return (
    <header className="bg-white border-gray-100 border-b">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {pageContext.frontmatter.title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
