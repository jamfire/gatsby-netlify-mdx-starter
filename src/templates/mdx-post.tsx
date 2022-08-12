// import libs
import * as React from "react";
import { graphql } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import type { PageProps } from "gatsby";

// import components
import Layout from "../components/layouts/default-layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Mdx } from "../../graphql-types";
import { Seo, SeoProps } from "../components/shortcodes";

interface MdxPageProps extends RouteComponentProps {
  data: {
    mdx: Mdx;
  };
  pageContext: {
    frontmatter: { [k: string]: string };
  };
}

const MdxPost = ({ data, location, pageContext }: MdxPageProps) => {
  return (
    <Layout location={location} pageContext={pageContext}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default MdxPost;

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        meta {
          date
          author
          description
        }
        featuredImage {
          file {
            sourceInstanceName
          }
          credit
        }
      }
      body
    }
  }
`;

export const Head = ({ location, params, data, pageContext }: SeoProps) => (
  <Seo
    location={location}
    params={params}
    data={data}
    pageContext={pageContext}
  />
);
