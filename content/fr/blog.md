---
layout: blog.njk
title: Blog
description: "Actualités de la famille Ellmenreich"
pagination:
    data: collections.posts_fr
    size: 10
    reverse: true
    generatePageOnEmptyData: true
permalink: "fr/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
