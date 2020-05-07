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
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      maxW: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      maxH: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      cropWidth: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 600) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      cropHeight: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 200) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      maxTwoK: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      noMax: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      portraitDogCropHeightWidth: file(
        relativePath: { eq: "portraitdog.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      portraitDogNoMax: file(relativePath: { eq: "portraitdog.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      landscapeDogCropHeightWidth: file(
        relativePath: { eq: "landscapedog.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      landscapeDogNoMax: file(relativePath: { eq: "landscapedog.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      landscapeDogNoLargerThanImageWidth: file(
        relativePath: { eq: "landscapedog.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
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

      <span>maxWidth: 200, maxHeight: 500, fluid smaller</span>
      <Img fluid={data.portraitDogCropHeightWidth.childImageSharp.fluid} />

      <hr />

      <span>noMax: in query: max image size, fluid smaller</span>
      <Img fluid={data.portraitDogNoMax.childImageSharp.fluid} />

      <hr />

      <span>maxWidth: 200, maxHeight: 500, fluid smaller</span>
      <Img fluid={data.landscapeDogCropHeightWidth.childImageSharp.fluid} />

      <hr />

      <span>noMax: in query: max image size, fluid smaller</span>
      <Img fluid={data.landscapeDogNoMax.childImageSharp.fluid} />

      <hr />

      <span>
        noMax: in query: max image size, won't go over image size regardless of
        maxWidth query value, fluid smaller
      </span>
      <Img
        fluid={data.landscapeDogNoLargerThanImageWidth.childImageSharp.fluid}
      />

      <hr />
    </>
  )
}

export default Image
