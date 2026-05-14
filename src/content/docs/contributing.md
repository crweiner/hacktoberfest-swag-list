---
title: Contributing
description: How to contribute to the Hacktoberfest Swag List.
---

We'd love it if you could help make the Hacktoberfest Swag List even better. That's the spirit of open source after all!

Check [Issues](https://github.com/crweiner/hacktoberfest-swag-list/issues) and current [Pull Requests](https://github.com/crweiner/hacktoberfest-swag-list/pulls) before contributing to avoid adding duplicates.

## Adding a new company to the list

Please follow these rules regarding how to add a new company to the List:

### Rules of Contributing

If you wish to add something to the Hacktoberfest Swag List, that's great and we'd love to have you!

Please be sure to follow the simple rules:

1. Be sure you are looking to add something of substance to this project, not just spam PRs. PRs must meet the [Hacktoberfest Quality Standards](https://hacktoberfest.com/participation/).
2. Verify that you have read the [home page](/), and [Readme.md on GitHub](https://github.com/crweiner/hacktoberfest-swag-list/blob/master/Readme.md). You understand that this project is to connect maintainers with developers, not a way to get all the swag you can.
3. Please be available to make changes within 48 hours when requested to do so. If you don't, then your PR may be closed.
4. Please fix all issues flagged by the bots, including CodeClimate, GH Actions, Netlify, CircleCI or any others as soon as possible, ideally right away.
5. A company must have publicly posted about their swag. You should include a link back to the original blog post, tweet, GitHub issue, etc. where the swag can be verified.
6. If adding a new company to the swag list, follow the formatting below:

## How to format your contribution

Make a [fork of this repo](https://github.com/crweiner/hacktoberfest-swag-list/fork) and add the details for what company and swag you find in the [list.md](https://github.com/crweiner/hacktoberfest-swag-list/blob/master/src/content/docs/list.md) file.

We are using a very simple language called Markdown to format this list. It's basically a way to make things look pretty without having to use a rich text editor. Please familiarize yourself with Markdown [using this handy cheat sheet provided by GitHub (PDF)](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf).

### A to Z Order of Companies

Find the first letter of your company within the list, then add your information in the correct alphabetical order by using the following Markdown formatting:

```markdown
#### Company Name

- **Swag**: (T-shirt, stickers, etc)
- **Requirements**: What do I have to complete? Are there different requirements per swag item? Are the PRs merged or just submitted?
    - Indented lists require a Tab or 4 spaces instead of 2 spaces.
- **How to sign up**: Link to signup page using inline formatting of [text](URL)
- **Issues**: Optional link to Hacktoberfest tagged issues.
- **Notes**: If needed, otherwise write "N/A". This is where links to blog posts/tweets go.
```

If you don't see a letter heading for your company, please add it! Use the Markdown formatting to do so:

```markdown
### A
```

---

## Setting up the site locally

You will need the following dependency already installed in your system to set up the site locally:

- [Node.js](https://nodejs.org/) (version 18.17.1 or higher)

### Setting up the repository

To get the site up and running locally, follow the below steps:

- Fork the repository [here](https://github.com/crweiner/hacktoberfest-swag-list/fork).

- Create a local clone of the website:

  ```bash
  git clone git@github.com:<YOUR-USERNAME>/hacktoberfest-swag-list.git
  ```

- Change into the `hacktoberfest-swag-list` directory:

  ```bash
  cd hacktoberfest-swag-list
  ```

- Install the required dependencies:

  ```bash
  npm install
  ```

- Start the local development server for live preview:

  ```bash
  npm run dev
  ```

- Open your browser to `http://localhost:4321` to see the site.

Please make sure you are always making changes in the Markdown files located in `src/content/docs/` and do not edit the built output.

## Other Contributing Guidelines

- Issues are not assigned to any one person. Please don't ask for an Issue to be assigned to you. All meaningful PRs will be reviewed first-come-first-served due to Hacktoberfest only being a month long.

---

_Disclaimer_: This website is a fan and community-made creation. It is not affiliated with [Hacktoberfest](https://hacktoberfest.com/) or any company offering swag.

---

If you're looking for the Swag List from 2018 through 2024 [click here](https://github.com/crweiner/hacktoberfest-swag-list/releases) for the GitHub releases, [click here](https://github.com/crweiner/hacktoberfest-swag-list/tags) for the tags, and see the [2018](https://github.com/crweiner/hacktoberfest-swag-list/tree/2018), [2019](https://github.com/crweiner/hacktoberfest-swag-list/tree/2019), [2020](https://github.com/crweiner/hacktoberfest-swag-list/tree/2020), [2021](https://github.com/crweiner/hacktoberfest-swag-list/tree/2021), [2022](https://github.com/crweiner/hacktoberfest-swag-list/tree/2022), [2023](https://github.com/crweiner/hacktoberfest-swag-list/tree/2023), and [2024](https://github.com/crweiner/hacktoberfest-swag-list/tree/2024) branches.
