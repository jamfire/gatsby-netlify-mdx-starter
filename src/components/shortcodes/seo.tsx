// import libs
import * as React from "react";
import { useStaticQuery, graphql, HeadProps } from "gatsby";

// props
export interface SeoProps extends HeadProps {
  pageContext: {
    frontmatter: { [k: string]: string };
  };
}

export const Seo = ({ location, params, data, pageContext }: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title data-gatsby-head="true">
        {pageContext.frontmatter.title} | {site.siteMetadata.title}
      </title>
    </>
  );
};
