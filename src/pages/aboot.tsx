import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const AbootPage = () => {
    return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Mr magnolia has aboot</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </main>
    )
}

export default AbootPage