---
layout: blog.njk
title: Blog
description: "News from the Ellmenreich family"
pagination:
  data: collections.posts_en
  size: 10
  reverse: true
  generatePageOnEmptyData: true
permalink: "en/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
