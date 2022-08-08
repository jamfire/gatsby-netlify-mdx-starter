// import libs
import * as React from "react";

// import components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const SocialMedia = () => {
  // icons cannot be imported dynamically if using babel macros because
  // text string is needed at build time
  return (
    <div className="mt-5">
      <ul className="flex gap-x-2">
        <li>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FontAwesomeIcon icon={brands("facebook")} className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FontAwesomeIcon icon={brands("twitter")} className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FontAwesomeIcon icon={brands("instagram")} className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FontAwesomeIcon icon={brands("youtube")} className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FontAwesomeIcon icon={brands("github")} className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
