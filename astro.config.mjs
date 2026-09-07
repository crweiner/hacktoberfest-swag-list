import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { satteri } from "@astrojs/markdown-satteri";

/**
 * Open links to other sites in a new tab. Internal links (`/list/`, `#anchors`)
 * are untouched. Runs on the HTML AST of every Markdown page.
 */
const externalLinks = {
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      const href = String(node.properties?.href ?? "");
      if (!/^https?:\/\//i.test(href)) return;
      ctx.setProperty(node, "target", "_blank");
      ctx.setProperty(node, "rel", "noopener noreferrer");
    },
  },
};

export default defineConfig({
  site: "https://hacktoberfestswaglist.com",
  markdown: {
    processor: satteri({ hastPlugins: [externalLinks] }),
  },
  integrations: [
    starlight({
      title: "Hacktoberfest Swag List",
      logo: {
        src: "./src/assets/HF26-Wordmark-Cream.svg",
        alt: "Hacktoberfest 2026",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/crweiner/hacktoberfest-swag-list",
        },
        {
          icon: "x.com",
          label: "X",
          href: "https://twitter.com/c_dubbs",
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      editLink: {
        baseUrl:
          "https://github.com/crweiner/hacktoberfest-swag-list/edit/master/",
      },
      sidebar: [
        { label: "Home", slug: "" },
        { label: "Swag List", slug: "list" },
        { label: "Contributing", slug: "contributing" },
      ],
      customCss: [
        // Hacktoberfest 2026 typefaces (self-hosted via Fontsource)
        "@fontsource/barlow-semi-condensed/700.css",
        "@fontsource/barlow-semi-condensed/800.css",
        "@fontsource-variable/inter",
        "@fontsource-variable/martian-mono",
        "./src/styles/custom.css",
      ],
      head: [
        {
          tag: "link",
          attrs: { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
        },
        {
          tag: "link",
          attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        },
        {
          tag: "meta",
          attrs: { name: "theme-color", content: "#3d5f58" },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://hacktoberfestswaglist.com/img/HF26-OG.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://hacktoberfestswaglist.com/img/HF26-OG.png",
          },
        },
      ],
    }),
  ],
});
