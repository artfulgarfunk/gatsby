import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `FEM artfulgarfunk`,
    description: 'getting to know Gatsby',
    image: 'https://en.wikipedia.org/wiki/File:Eurasian_wolf_2.jpg',
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}

export default config
