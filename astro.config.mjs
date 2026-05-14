import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://hacktoberfestswaglist.com",
  integrations: [
    starlight({
      title: "Hacktoberfest Swag List",
      logo: {
        light: "./src/assets/HF-Icon-Color-Dark.svg",
        dark: "./src/assets/HF-Icon-Color-Light.svg",
        replacesTitle: false,
      },
      favicon: "/favicon.ico",
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
        { label: "Contributing", slug: "contributing" },
        { label: "2025 Hacktoberfest Swag List", slug: "list" },
      ],
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/img/HF-Horizontal-Color-Dark.png",
          },
        },
      ],
      components: {},
    }),
  ],
});
