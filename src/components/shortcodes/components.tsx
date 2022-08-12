import React from "react";
import { MDXProviderComponentsProp } from "@mdx-js/react";

export const H1 = (props: MDXProviderComponentsProp) => (
  <h1 className="text-3xl md:text-3xl my-4" {...props} />
);

export const H2 = (props: MDXProviderComponentsProp) => (
  <h2 className="text-2xl md:text-2xl my-2" {...props} />
);

export const H3 = (props: MDXProviderComponentsProp) => (
  <h3 className="text-xl md:text-xl my-1" {...props} />
);

export const P = (props: MDXProviderComponentsProp) => (
  <p className="text-base py-5" {...props} />
);

export const UL = (props: MDXProviderComponentsProp) => (
  <ul className="text-base py-5" {...props} />
);

export const Code = (props: MDXProviderComponentsProp) => (
  <code className="bg-gray-100 text-sm" {...props} />
);
