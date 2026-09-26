# Ellmenreichs website

Das ist die Website der Familie Ellmenreich, oder besser gesagt der Sourcecode
der Website. Am besten einfach hier zur Website gehen: <link einfügen>

## Overview

This website is statically generated, that means that the content is defined,
once here in code and then does not change once the website is live. To change
the content on the website you have to first change the code and then redeploy
the whole website.

Although this approach may seem complicated it actually makes a lot of things
simpler, although this is not the place to elaborate on those.

## creating / editing Content

This is very simple, go into the `content/` Folder, edit or create the page
that you are interested in and then just restart the docker container (more to that in [here](#Run%20with%20Docker)).
The new or edited page should now apprear correctly. For more complicated
edits please contact the administrator.

New pages that have been added in the `content/<lang>/blog/` directory will
automatically be added as new blogposts. Here its important to set correct
headers (the stuff at the top) so that the software has a correct date as well
as tags.

New blogposts have to follow the syntax of Markdown as specified here: [link](https://www.markdownguide.org/cheat-sheet/).
Although somewhat restrictive it does make website creation very easy.

### Adding images

To add images please do not just add the images to the repository itself,
first go onto the rustfs instance that I have provided to you and then
upload the image there. Once the image is uploaded to the rustfs instance,
you can copy the link and paste it into your blogpost as a normal image link.
It will then be automatically displayed.

## Languages

This website supports a few different languages, which can also be expanded
upon in the future if nessesary. In the case that new content is created, two
places have to be respected:

- First the `_data/translations.yml` which contains all translations for
  all button text, navbars and so on.
- Then the separate content in the `content/` directory. Pages for every
  laguage have to be created separatly and placed in their respective
  content folder.

The current avaialable languages are:

- German: `/de/`
- Italian: `/it/`
- English: `/en/`
- French: `/fr/`

The root URL redirects to the German homepage. The structure follows [Eleventy’s internationalization guide](https://www.11ty.dev/docs/i18n/),
using one matching content tree per language and Eleventy’s bundled i18n plugin
for localized links.

## Run with Docker

Without having to install any other dependencies you can just use docker to
build and run this website which is very convenient and avoids all of the
annoying js dependencies.

A command to build and run the docker container is:

```sh
docker build -t ellmis . && docker run --rm --name ellmis -p 8080:80 ellmis
```

Then open `http://localhost:8080/`.
