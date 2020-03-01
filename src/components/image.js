import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      maxWH: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      maxW: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      maxH: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cropWidth: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cropHeight: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      maxTwoK: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      noMax: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <span>
        maxWidth: 200, maxHeight: 200. Restrict width/height fluid smaller
      </span>
      <Img fluid={data.maxWH.childImageSharp.fluid} />

      <hr />

      <span>maxWidth: 500, fluid smaller</span>
      <Img fluid={data.maxW.childImageSharp.fluid} />

      <hr />

      <span>maxHeight: 500, fluid smaller</span>
      <Img fluid={data.maxH.childImageSharp.fluid} />

      <hr />

      <span>maxWidth: 200, maxHeight: 600. Crop Width</span>
      <Img fluid={data.cropWidth.childImageSharp.fluid} />

      <hr />

      <span>maxHeight: 200, maxWidth: 600. Crop Height</span>
      <Img fluid={data.cropHeight.childImageSharp.fluid} />

      <hr />

      <span>Max 2k: fluid smaller</span>
      <Img fluid={data.maxTwoK.childImageSharp.fluid} />

      <hr />

      <span>noMax in query: max image size, fluid smaller</span>
      <Img fluid={data.noMax.childImageSharp.fluid} />

      <hr />
    </>
  )
}

export default Image
