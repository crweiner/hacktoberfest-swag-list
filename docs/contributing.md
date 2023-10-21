# 🌟 Contributing to Hacktoberfest Swag List

Welcome to the Hacktoberfest Swag List! We invite you to contribute and make it even better. That's the beauty of open source!

Before you begin, please ensure:

- Check for existing [Issues](https://github.com/crweiner/hacktoberfest-swag-list/issues) and [Pull Requests](https://github.com/crweiner/hacktoberfest-swag-list/pulls) to avoid duplications.

## Adding a New Company

Adding a new company to the list is appreciated. Please follow these guidelines:

### Contribution Rules

When contributing to the Hacktoberfest Swag List, please keep these rules in mind:

1. Ensure your contribution aligns with [Hacktoberfest Quality Standards](https://hacktoberfest.com/participation). No spam PRs, please.

2. Familiarize yourself with the [home page](index.md) and [Readme.md on GitHub](https://github.com/crweiner/hacktoberfest-swag-list/blob/master/README.md). This project is about connecting maintainers with developers, not just collecting swag.

3. Be responsive to requested changes within 48 hours. Failure to do so may result in PR closure.

4. Address issues flagged by bots (e.g., CodeClimate, GH Actions, Netlify, CircleCI) promptly.

5. Include a link to the original blog post, tweet, GitHub issue, etc., where the swag can be verified.

### Contribution Format

To add a company, follow this format in the [list.md](/docs/list.md) file:

```markdown
#### **Company Name**

- **Swag**: (T-shirt, stickers, etc.)
- **Requirements**: Describe how to earn swag. Mention if different swag items have varied requirements.
    - Indented lists should use a Tab or 4 spaces due to MkDocs formatting.
- **How to sign up**: Provide a link to the signup page using [text](URL).
- **Issues**: Optionally, include a link to Hacktoberfest-tagged issues.
- **Notes**: Add any necessary notes or links to blog posts/tweets. Use "N/A" if not applicable.
```

If the company's name lacks a heading in the alphabetical list, add it like this:

```markdown
### A
```

---

## Setting Up the Site Locally

To set up MkDocs locally, you'll need:

- [Python 3.8](https://www.python.org/downloads/release/python-380/) (Also tested with Python 3.11.4)
- [pipenv](https://pypi.org/project/pipenv/)

### Repository Setup

To get started, follow these steps:

- Fork the repository [here](https://github.com/crweiner/hacktoberfest-swag-list/fork).

- Create a local clone:

  ```bash
  git clone git@github.com:<YOUR-USERNAME>/hacktoberfest-swag-list.git
  ```

- Navigate to the `hacktoberfest-swag-list` directory:

  ```bash
  cd hacktoberfest-swag-list
  ```

### Running MkDocs

- Install the required dependencies:

  ```bash
  pipenv install
  ```

- Build the site and access it on your local server for live viewing:

  ```bash
  mkdocs serve
  ```

Please edit the Markdown docs in the `/docs/` directory, not the HTML generated in the `/site/` directory.

### Using Docker

Alternatively, use the native [Mkdocs-Material Docker image](https://hub.docker.com/r/squidfunk/mkdocs-material) to build the site locally. The Dockerfile provided includes the `markdown-link-attr-modifier` plugin for opening links in new tabs.

Build the latest image:

```bash
docker build -t squidfunk/mkdocs-material .
```

Run the Docker instance:

```bash
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

## Other Guidelines

- Issues are not assigned to individuals. PRs are reviewed on a first-come, first-served basis, given the month-long duration of Hacktoberfest.

---

Disclaimer: This website is a fan and community-made project, not affiliated with [Hacktoberfest](https://hacktoberfest.digitalocean.com/) or any swag-offering companies.

![Presented by DigitalOcean](img/hf10_icon_fcd_rgb.png)

---

For past Swag Lists from 2018 to 2022, refer to [releases](https://github.com/crweiner/hacktoberfest-swag-list/releases) on GitHub, [tags](https://github.com/crweiner/hacktoberfest-swag-list/tags), or the [2018](https://github.com/crweiner/hacktoberfest-swag-list/tree/2018), [2019](https://github.com/crweiner/hacktoberfest-swag-list/tree/2019), [2020](https://github.com/crweiner/hacktoberfest-swag-list/tree/2020), [2021](https://github.com/crweiner/hacktoberfest-swag-list/tree/2021), and [2022](https://github.com/crweiner/hacktoberfest-swag-list/tree/2022) branches.