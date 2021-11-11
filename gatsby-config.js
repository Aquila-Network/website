module.exports = {
  siteMetadata: {
    siteUrl: "https://aquila.network",
    title: "website",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-156570061-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
       postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
      ], 
      },
    },
    "gatsby-plugin-typescript"
  ],
};
