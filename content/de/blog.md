---
layout: blog.njk
title: Blog
description: "Neuigkeiten von der Familie Ellmenreich"
pagination:
  data: collections.posts_de
  size: 10
  reverse: true
  generatePageOnEmptyData: true
permalink: "de/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
