// import libs
import * as React from "react";

// import components
import { MDXProvider } from "@mdx-js/react";
import * as shortcodes from "../shortcodes";
import Header from "../header";
import Navigation from "../navigation";
import Footer from "../footer";

// props
import { RouteComponentProps } from "@reach/router";
interface LayoutProps extends RouteComponentProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: { [k: string]: string };
  };
}

// mdx components
const components = Object.assign(
  {},
  {
    h1: shortcodes.H1,
    h2: shortcodes.H2,
    h3: shortcodes.H3,
    p: shortcodes.P,
    ul: shortcodes.UL,
    code: shortcodes.Code,
  },
  shortcodes
);

export default ({ children, location, pageContext }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation location={location} />
      <Header pageContext={pageContext} />
      <main className="grow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </main>
      <Footer />
    </div>
  );
};
