// import libs
import path from "path";

// props
export interface CreatePostsProps {
  actions: any;
  graphql: any;
  reporter: any;
}

interface VariablesProps {
  limit: number;
  skip: number;
}

// create posts function
export default async ({ actions, graphql, reporter }: CreatePostsProps) => {
  // limit per query
  const PER_PAGE = 10;

  // graphql query
  const GET_POSTS = `
  query GET_POSTS($limit: Int, $skip: Int) {
    pages: allMdx(
      filter: {fileAbsolutePath: {regex: "/src/posts/"}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        pageCount
      }
    }
  }
  `;

  // get needed actions
  const { createPage } = actions;

  // array to store all nodes in
  const allNodes: any = [];

  // find all default locale pages and created localized versions
  const fetchPosts = async (variables: VariablesProps) => {
    await graphql(GET_POSTS, variables).then(({ data }: any) => {
      // get the nodes and pagination data
      const {
        pages: {
          edges,
          pageInfo: { currentPage, hasNextPage },
        },
      } = data;

      // push page to nodes array
      edges.map(({ node }: any) => {
        allNodes.push(node);
      });

      // if there are more pages, execute the query again
      if (hasNextPage) {
        let skipVal = currentPage * variables.limit;
        return fetchPosts({
          limit: variables.limit,
          skip: skipVal,
        });
      }

      // return the nodes
      return allNodes;
    });
  };

  // initiaze the query
  await fetchPosts({
    limit: PER_PAGE,
    skip: 0,
  }).then(() => {
    // page template component
    const pageTemplate = path.resolve(`${__dirname}/../templates/mdx-post.tsx`);

    // iterate through pages and create localized versions
    allNodes.map((page: any) => {
      createPage({
        path: `/blog/${page.slug}`,
        component: pageTemplate,
        context: {
          id: page.id,
          slug: page.slug,
          frontmatter: page.frontmatter,
        },
      });
    });

    // console output
    reporter.info(`Total Posts: ${allNodes.length}`);
  });
};
