// import * as React from "react";
// import Layout from "../../components/layout";
// import { graphql } from "gatsby";
// import {MDXRenderer} from 'gatsby-plugin-mdx'

// const BlogPost = ({data}) => {
//   return (
//     <Layout pageTitle="Super Cool Blog Posts">
//       <p>{data.mdx.frontmatter.data}</p>
//       <MDXRenderer>
//         {data.mdx.body}
//       </MDXRenderer>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//       body
//     }
//   }
// `;

// export default BlogPost;
