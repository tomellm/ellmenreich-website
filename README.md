# Ellmenreichs website

This is a multilingual Eleventy site for the Ellmenreich family. German is the default language, and all public content is available under a language prefix:

- German: `/de/`
- Italian: `/it/`
- English: `/en/`

The root URL redirects to the German homepage. The structure follows [Eleventy’s internationalization guide](https://www.11ty.dev/docs/i18n/), using one matching content tree per language and Eleventy’s bundled i18n plugin for localized links.

## Run with Docker

Node is not required on the host. Build and run the complete static site with:

```sh
docker build --build-arg SITE_URL=http://localhost:8080 -t ellmenreichs .
docker run --rm -p 8080:80 ellmenreichs
```

Then open `http://localhost:8080/`. For a production image, pass the public origin as `SITE_URL`, without a trailing slash, so canonical, sitemap, and feed URLs use the deployed domain.

## Add or translate content

Page translations use the same filename below each language directory. For example:

```text
content/de/about.md
content/it/about.md
content/en/about.md
```

Blog posts follow the same rule:

```text
content/de/blog/family-news.md
content/it/blog/family-news.md
content/en/blog/family-news.md
```

Matching paths allow the language switcher to link equivalent pages. Shared interface labels, form messages, and search text live in `_data/translations.yaml`.

To add another language, add its code to `languages` and its feed text in `eleventy.config.js`, add its strings to `_data/translations.yaml`, and create a matching `content/<language-code>/` tree with a directory data file like `content/en/en.json`.

The theme started from [11ty Clean Blog by Adam DJ Brett](https://github.com/adamdjbrett/11ty-clean-blog-startboostrap).
