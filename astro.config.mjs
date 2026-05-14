import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeSix from '@six-tech/starlight-theme-six';

const editBranch = process.env.GIT_BRANCH || 'master';

export default defineConfig({
  site: 'https://hacktoberfestswaglist.com',
  integrations: [
    starlight({
      title: 'Hacktoberfest Swag List',
      description:
        'Connecting contributors to open-source projects during Hacktoberfest.',
      favicon: '/img/favicon.ico',
      logo: {
        src: './src/assets/hacktoberfest-icon-light.svg',
        alt: 'Hacktoberfest Swag List',
      },
      editLink: {
        baseUrl:
          `https://github.com/crweiner/hacktoberfest-swag-list/edit/${editBranch}/`,
      },
      plugins: [
        starlightThemeSix({
          navLinks: [
            { label: 'Home', link: '/' },
            { label: 'Swag List', link: '/list/' },
            { label: 'Contributing', link: '/contributing/' },
          ],
          footerText:
            'This community site is not affiliated with Hacktoberfest or any company offering swag.',
        }),
      ],
      sidebar: [
        { label: 'Home', slug: 'index' },
        { label: 'Swag List', slug: 'list' },
        { label: 'Contributing', slug: 'contributing' },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub repository',
          href: 'https://github.com/crweiner/hacktoberfest-swag-list',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      customCss: ['./src/styles/hacktoberfest-swag-list.css'],
      lastUpdated: true,
      pagination: false,
    }),
  ],
});
