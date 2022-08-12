// import libs
import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// import components
import { Link } from "gatsby";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// nav links
const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Navigation = ({ location }: RouteComponentProps) => {
  // mobile menu
  const [menu, toggleMenu] = useState(false);

  const { logo } = useStaticQuery(graphql`
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
    }
  `);

  // check for active navigation
  const isActive = (pathname: string) => {
    if (pathname === "/") {
      return pathname === location?.pathname;
    } else {
      return location?.pathname.includes(pathname);
    }
  };

  // get the link class
  const linkClass = (pathname: string, mobile = false) => {
    const active = isActive(pathname);

    if (active) {
      return `bg-gray-100 text-slate-900 px-3 py-2 rounded-md text-sm font-medium ${
        mobile ? "block" : "inline-block"
      }`;
    } else {
      return `text-slate-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ${
        mobile ? "block" : "inline-block"
      }`;
    }
  };

  // logo image
  const logoImage = getImage(logo);

  return (
    <nav className="bg-white border-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {logoImage && (
                <Link to="/">
                  <GatsbyImage
                    image={logoImage}
                    className="w-8 h-8 mr-3 md:mr-0"
                    alt={``}
                  />
                </Link>
              )}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <Link
                    to={link.url}
                    className={linkClass(link.url, false)}
                    key={link.url}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => toggleMenu(!menu)}
            >
              <span className="sr-only">Open main menu</span>
              {!menu && <MenuIcon className="block h-6 w-6" />}
              {menu && <XIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${menu ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link
              to={link.url}
              className={linkClass(link.url, true)}
              key={link.url}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
