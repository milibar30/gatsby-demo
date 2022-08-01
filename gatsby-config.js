module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title:"Milind's Site"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    'gatsby-plugin-postcss',
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blogs`,
    //   }
    // },
    "gatsby-plugin-mdx",
  ],
}
