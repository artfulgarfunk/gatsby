import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    // same as 
    // const Layout = (props) => {
        // const pageTitle = props.pageTitle
        // const children = props.children
    // } - javascript destructuring
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle} (this is a layout)</h1>
        gql query data: {data.site.siteMetadata.title}
        {children}
      </main>
    </div>
  )
}
export default Layout