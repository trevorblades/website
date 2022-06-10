import mdx from "@cyco130/vite-plugin-mdx";
import remarkFrontmatter from "remark-frontmatter";
import { defineConfig } from "@rakkasjs/cli";
import { remarkMdxRakkas } from "@trevorblades/remark-mdx-rakkas";

export default defineConfig({
  pageExtensions: ["jsx", "tsx", "mdx"],
  vite: {
    plugins: [
      mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxRakkas],
      }),
    ],
  },
});
