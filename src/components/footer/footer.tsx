// import libs
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// import components
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SocialMedia from "../social-media";

const Footer = () => {
  const { logo, site } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  // logo image
  const logoImage = getImage(logo);

  return (
    <footer className="border-gray-100 text-gray-500 text-base border-t">
      <div className="max-w-7xl mx-auto py-6 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-7 width-full">
          <div className="md:col-span-3">
            {logoImage && (
              <Link to="/">
                <GatsbyImage
                  image={logoImage}
                  className="w-16 h-16 mb-5"
                  alt={``}
                />
              </Link>
            )}
            <p className="text-base">{site.siteMetadata.description}</p>
            <SocialMedia />
          </div>
          <div className="md:col-span-2">One</div>
          <div className="md:col-span-2">Two</div>
        </div>
      </div>
      <div className="flex md:justify-center md:items-center md:p-10 border-gray-100 border-t">
        <p className="max-w-7xl mx-auto py-6 md:py-2 px-4 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} {site.siteMetadata.title}. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
