import mdx from "@cyco130/vite-plugin-mdx";
import remarkFrontmatter from "remark-frontmatter";
import { defineConfig } from "@rakkasjs/cli";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

export default defineConfig({
  pageExtensions: ["jsx", "tsx", "mdx"],
  vite: {
    plugins: [
      mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "context" }],
        ],
      }),
    ],
  },
});
